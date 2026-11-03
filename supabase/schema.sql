-- The Credence Letters: expert desk and Briefings
--
-- Run this once in Supabase (SQL Editor → New query → paste → Run).
-- It is safe to run again after an update.
--
-- Who can have an account:
--   Only the team members listed in desk.members (section 1). Each account's
--   login is <team id>@desk.thecredenceletters.com (the id from
--   assets/js/team.js, e.g. dominick@desk.thecredenceletters.com), an address
--   that receives no email. The database refuses any other account, so readers
--   and outsiders cannot sign up, whatever the Auth settings say.
--
-- How a member gets in:
--   The editor adds the account in Supabase (Authentication → Users → Add user
--   → Create new user) with that login, a one-time setup code as its password,
--   and "Auto Confirm User" ticked. On the desk the member chooses their name,
--   enters the code, and creates their own password. After that they sign in
--   with their name and password.
--
-- What it sets up:
--   desk.members  the team list allowed to have accounts, with each role
--   profiles      one row per account: name, team id, role
--   pieces        what members write, with the approval status:
--                   draft → waiting (Publish pressed) → approved (by the editor)
--                   or waiting → returned (sent back with a note) → waiting again
--   briefings     the public list of approved pieces whose publish date has arrived
--   drafts        a private storage bucket for uploaded documents
--
-- Access rules (row-level security):
--   - Members see and change only their own pieces, and only while they are a
--     draft or returned. Pressing Publish locks a piece; withdrawing it (or
--     reopening an approved piece) turns it back into a draft.
--   - Only the editor can approve, schedule or return a piece.
--   - The public can read only published briefings and their authors' names.
--   - Uploaded documents sit in each author's own folder; only the author and
--     the editor can open them.

-- 0. A private schema for helpers (not reachable through the website's API) --

create schema if not exists desk;
revoke all on schema desk from public;
-- The access rules below call desk functions, so the API roles may use them,
-- but they get no rights on desk tables.
grant usage on schema desk to anon, authenticated;

-- 1. The team ---------------------------------------------------------------
-- Add a member:   insert into desk.members (team_id, name) values ('id', 'Full Name');
-- (role is 'expert' unless given: 'researcher' or 'editor')

create table if not exists desk.members (
  team_id text primary key check (team_id ~ '^[a-z0-9-]+$'),
  name text not null,
  role text not null default 'expert' check (role in ('expert', 'researcher', 'editor')),
  added_at timestamptz not null default now()
);
alter table desk.members enable row level security;
revoke all on desk.members from public, anon, authenticated;

insert into desk.members (team_id, name, role) values
  ('aaron', 'Aaron Mwesigwa Mwebaze', 'editor'),
  ('dominick', 'Dominick Damian Msalila', 'expert'),
  ('yidnekachew', 'Yidnekachew Addis', 'expert')
on conflict (team_id) do nothing;

-- The team id in a desk login: dominick@desk.thecredenceletters.com → 'dominick'.
create or replace function desk.login_team_id(email text) returns text
language sql immutable set search_path = '' as $$
  select case when lower(email) like '%@desk.thecredenceletters.com'
              then nullif(split_part(lower(email), '@', 1), '') end
$$;

-- Today's date where the editor works (Chiang Rai), used for publish dates.
create or replace function desk.today() returns date
language sql stable set search_path = '' as $$
  select (now() at time zone 'Asia/Bangkok')::date
$$;

-- 2. Accounts --------------------------------------------------------------

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null default '',
  team_id text unique,         -- the member's id in assets/js/team.js, e.g. 'dominick'
  role text not null default 'expert' check (role in ('expert', 'researcher', 'editor')),
  created_at timestamptz not null default now()
);

-- Refuse any account that is not a desk login for someone on the team list.
create or replace function desk.guard_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  tid text := desk.login_team_id(new.email);
begin
  if tid is null or not exists (select 1 from desk.members m where m.team_id = tid) then
    raise exception 'Accounts are only for members of The Credence Letters team';
  end if;
  return new;
end $$;

-- Every new account gets a profile with the member's name and role.
create or replace function desk.handle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, name, team_id, role)
  select new.id, m.name, m.team_id, m.role
    from desk.members m where m.team_id = desk.login_team_id(new.email)
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists desk_guard_new_user on auth.users;
create trigger desk_guard_new_user before insert on auth.users
  for each row execute function desk.guard_new_user();

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function desk.handle_new_user();

-- Accounts that existed before this script ran.
insert into public.profiles (id, name, team_id, role)
  select u.id, m.name, m.team_id, m.role
    from auth.users u join desk.members m on m.team_id = desk.login_team_id(u.email)
  on conflict (id) do nothing;

create or replace function desk.is_editor() returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.profiles where id = (select auth.uid()) and role = 'editor');
$$;

-- 3. Pieces ----------------------------------------------------------------

create table if not exists public.pieces (
  id uuid primary key default gen_random_uuid(),
  author uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  title text not null default '',
  summary text not null default '',
  body text not null default '',
  sources text not null default '',
  focus text,                  -- health | peace | rivers | trade | own
  photo text,                  -- a key from assets/js/photos.js
  idea_id text,                -- the idea it started from (assets/js/ideas.js)
  file_path text,              -- uploaded document, in the drafts bucket
  file_name text,
  status text not null default 'draft' check (status in ('draft', 'waiting', 'returned', 'approved')),
  editor_note text,            -- the editor's note when a piece is sent back
  slug text unique,            -- set on first approval; used in the public link
  submitted_at timestamptz,
  approved_at timestamptz,
  publish_on date,             -- the day it appears on the site (Bangkok time)
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists pieces_author_idx on public.pieces (author);
create index if not exists pieces_status_idx on public.pieces (status, publish_on);

-- Keeps the approval rules in the database, whatever the page sends.
create or replace function desk.pieces_guard() returns trigger
language plpgsql set search_path = '' as $$
declare
  editor boolean := desk.is_editor();
begin
  if tg_op = 'INSERT' then
    if not editor then
      new.author := auth.uid();
      if new.status is distinct from 'waiting' then new.status := 'draft'; end if;
      new.editor_note := null;
      new.slug := null;
    end if;
    new.created_at := now();
  else
    new.id := old.id;
    new.created_at := old.created_at;
    if not editor then
      new.author := old.author;
      new.editor_note := old.editor_note;
      new.slug := old.slug;
      if old.status in ('draft', 'returned') then
        if new.status not in ('draft', 'waiting', old.status) then
          raise exception 'Only the editor can approve or return a piece';
        end if;
      elsif new.status <> 'draft' then
        -- waiting or approved: locked until the author withdraws or reopens it
        raise exception 'Withdraw or reopen the piece before changing it';
      end if;
    end if;
  end if;

  if new.status = 'waiting' and (tg_op = 'INSERT' or old.status is distinct from 'waiting') then
    new.submitted_at := now();
  end if;

  if new.status = 'approved' then
    if tg_op = 'INSERT' or old.status is distinct from 'approved' then
      new.approved_at := now();
    end if;
    if new.publish_on is null then new.publish_on := desk.today(); end if;
    if new.slug is null then
      new.slug := nullif(left(trim(both '-' from regexp_replace(lower(new.title), '[^a-z0-9]+', '-', 'g')), 60), '');
      new.slug := coalesce(new.slug || '-', '') || left(replace(new.id::text, '-', ''), 6);
    end if;
  else
    new.approved_at := null;
    new.publish_on := null;
  end if;

  new.updated_at := now();
  return new;
end $$;

drop trigger if exists pieces_guard on public.pieces;
create trigger pieces_guard before insert or update on public.pieces
  for each row execute function desk.pieces_guard();

-- 4. Access rules ----------------------------------------------------------

alter table public.profiles enable row level security;
alter table public.pieces enable row level security;

revoke all on public.profiles, public.pieces from public, anon, authenticated;
grant select, update on public.profiles to authenticated;
grant select, insert, update, delete on public.pieces to authenticated;
-- The public sees only these columns, and only for published pieces (policies below).
grant select (id, name, team_id) on public.profiles to anon;
grant select (author, slug, title, summary, body, sources, focus, photo, status, publish_on) on public.pieces to anon;

revoke all on function desk.is_editor(), desk.today(), desk.login_team_id(text) from public;
grant execute on function desk.is_editor(), desk.today() to anon, authenticated;
revoke all on function desk.guard_new_user(), desk.handle_new_user(), desk.pieces_guard() from public, anon, authenticated;

-- Members: their own profile, everyone's for the editor, and authors of published pieces.
drop policy if exists "profiles: own or editor" on public.profiles;
create policy "profiles: own or editor" on public.profiles
  for select to authenticated
  using (id = (select auth.uid()) or (select desk.is_editor())
         or exists (select 1 from public.pieces p
                    where p.author = profiles.id and p.status = 'approved' and p.publish_on <= (select desk.today())));

-- The public: only authors of published pieces.
drop policy if exists "profiles: authors of published pieces" on public.profiles;
create policy "profiles: authors of published pieces" on public.profiles
  for select to anon
  using (exists (select 1 from public.pieces p
                 where p.author = profiles.id and p.status = 'approved' and p.publish_on <= (select desk.today())));

drop policy if exists "profiles: editor updates" on public.profiles;
create policy "profiles: editor updates" on public.profiles
  for update to authenticated
  using ((select desk.is_editor())) with check ((select desk.is_editor()));

-- Members: their own pieces, all pieces for the editor, and anything published.
drop policy if exists "pieces: read own or editor" on public.pieces;
create policy "pieces: read own or editor" on public.pieces
  for select to authenticated
  using (author = (select auth.uid()) or (select desk.is_editor())
         or (status = 'approved' and publish_on <= (select desk.today())));

-- The public: published pieces only.
drop policy if exists "pieces: published" on public.pieces;
create policy "pieces: published" on public.pieces
  for select to anon
  using (status = 'approved' and publish_on <= (select desk.today()));

drop policy if exists "pieces: add own" on public.pieces;
create policy "pieces: add own" on public.pieces
  for insert to authenticated
  with check (author = (select auth.uid()) or (select desk.is_editor()));

drop policy if exists "pieces: change own or editor" on public.pieces;
create policy "pieces: change own or editor" on public.pieces
  for update to authenticated
  using (author = (select auth.uid()) or (select desk.is_editor()))
  with check (author = (select auth.uid()) or (select desk.is_editor()));

drop policy if exists "pieces: delete own drafts or editor" on public.pieces;
create policy "pieces: delete own drafts or editor" on public.pieces
  for delete to authenticated
  using ((author = (select auth.uid()) and status in ('draft', 'returned')) or (select desk.is_editor()));

-- 5. Briefings: what the public site reads ---------------------------------
-- Runs with the reader's own rights (security_invoker), so it shows exactly
-- what the rules above allow: approved pieces whose publish date has arrived.

drop view if exists public.briefings;
create view public.briefings with (security_invoker = true) as
  select p.slug, p.title, p.summary, p.body, p.sources, p.focus, p.photo, p.publish_on,
         pr.name as author_name, pr.team_id as author_team
  from public.pieces p
  join public.profiles pr on pr.id = p.author
  where p.status = 'approved' and p.publish_on <= desk.today();

revoke all on public.briefings from public, anon, authenticated;
grant select on public.briefings to anon, authenticated;

-- 6. Uploaded documents ----------------------------------------------------

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('drafts', 'drafts', false, 20971520, array[
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword',
  'application/vnd.oasis.opendocument.text',
  'application/pdf',
  'application/rtf',
  'text/rtf',
  'text/plain'
])
on conflict (id) do update
  set public = false, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "drafts: upload to own folder" on storage.objects;
create policy "drafts: upload to own folder" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'drafts' and (storage.foldername(name))[1] = (select auth.uid())::text);

drop policy if exists "drafts: open own or editor" on storage.objects;
create policy "drafts: open own or editor" on storage.objects
  for select to authenticated
  using (bucket_id = 'drafts' and ((storage.foldername(name))[1] = (select auth.uid())::text or (select desk.is_editor())));

drop policy if exists "drafts: remove own or editor" on storage.objects;
create policy "drafts: remove own or editor" on storage.objects
  for delete to authenticated
  using (bucket_id = 'drafts' and ((storage.foldername(name))[1] = (select auth.uid())::text or (select desk.is_editor())));

-- 7. Tidy up helpers from an earlier version of this file ------------------

drop function if exists public.is_editor();
drop function if exists public.desk_today();
drop function if exists public.desk_team_id(text);
drop function if exists public.handle_new_user();
drop function if exists public.pieces_guard();
