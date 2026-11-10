-- The Credence Letters: the team pages (/researchers and /experts) and Briefings
--
-- Run this in Supabase (SQL Editor → New query → paste → Run).
-- It is safe to run again after an update: it adds what is missing and keeps
-- every account, piece and take-up that is already there.
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
--   and "Auto Confirm User" ticked. On /researchers or /experts the member
--   chooses Expert or Researcher, then their name, enters the code, and
--   creates their own password. After that they sign in with their name and
--   password (and, for experts and the editor, the code from their phone).
--
-- Departments:
--   health  Public health
--   gov     Governance and development (international relations, peace and
--           conflict, economics and development, trade, shared rivers)
--   Each expert belongs to one department (desk.members.dept). Researchers
--   choose a department for each piece.
--
-- The flow of a piece:
--   draft → waiting (Submit) → approved (published) or returned (sent back
--   with comments and questions) → waiting again once corrected.
--   Who reviews it:
--     - a piece by an expert: the editor
--     - a piece that touches a contested political dispute: the editor
--     - any other piece: the experts of its department (the editor can too)
--     - nobody reviews or approves their own piece
--   An expert's or the editor's approval publishes it on the Analysis page on
--   the day they choose (today or later, Bangkok time). Reviewing needs the
--   two-step code from the reviewer's phone (a session at level aal2).
--
-- What it sets up:
--   desk.members  the team list allowed to have accounts, with role and department
--   profiles      one row per account: name, team id, role, department
--   pieces        what members write, with its review status
--   piece_notes   comments and questions between a writer and their reviewers
--   takeups       which dispatch each member has taken up (one person each)
--   briefings     the public list of approved pieces whose publish date has arrived
--   drafts        a private storage bucket for uploaded documents
--   covers        a storage bucket for cover pictures (readable by link, so a
--                 published piece can show its cover)

-- 0. A private schema for helpers (not reachable through the website's API) --

create schema if not exists desk;
revoke all on schema desk from public;
-- The access rules below call desk functions, so the API roles may use them,
-- but they get no rights on desk tables.
grant usage on schema desk to anon, authenticated;

-- 1. The team ---------------------------------------------------------------
-- Add a member:   insert into desk.members (team_id, name, role, dept) values ('id', 'Full Name', 'researcher', null);
-- role: 'expert' (give a dept: 'health' or 'gov'), 'researcher' or 'editor'

create table if not exists desk.members (
  team_id text primary key check (team_id ~ '^[a-z0-9-]+$'),
  name text not null,
  role text not null default 'expert' check (role in ('expert', 'researcher', 'editor')),
  added_at timestamptz not null default now()
);
alter table desk.members add column if not exists dept text check (dept in ('health', 'gov'));
alter table desk.members enable row level security;
revoke all on desk.members from public, anon, authenticated;

insert into desk.members (team_id, name, role, dept) values
  ('aaron', 'Aaron Mwesigwa Mwebaze', 'editor', null),
  ('dominick', 'Dominick Damian Msalila', 'expert', 'health'),
  ('yidnekachew', 'Yidnekachew Addis', 'expert', 'gov'),
  ('ohn', 'Bongsavijaya (Ohn) Onkchareon', 'researcher', null),
  ('albert', 'Albert (Kyi Thwin Ko Ko) Dominic', 'researcher', null),
  ('badri', 'Badri Prakash Niroula', 'researcher', null)
on conflict (team_id) do nothing;
-- Departments for experts added before departments existed.
update desk.members set dept = 'health' where team_id = 'dominick' and dept is null;
update desk.members set dept = 'gov' where team_id = 'yidnekachew' and dept is null;

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
alter table public.profiles add column if not exists dept text check (dept in ('health', 'gov'));

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

-- Every new account gets a profile with the member's name, role and department.
create or replace function desk.handle_new_user() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  insert into public.profiles (id, name, team_id, role, dept)
  select new.id, m.name, m.team_id, m.role, m.dept
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
insert into public.profiles (id, name, team_id, role, dept)
  select u.id, m.name, m.team_id, m.role, m.dept
    from auth.users u join desk.members m on m.team_id = desk.login_team_id(u.email)
  on conflict (id) do nothing;
-- Keep role and department in step with the team list.
update public.profiles p set role = m.role, dept = m.dept
  from desk.members m
 where m.team_id = p.team_id and (p.role is distinct from m.role or p.dept is distinct from m.dept);

-- True when this session gave the two-step code from the member's phone.
create or replace function desk.aal2() returns boolean
language sql stable set search_path = '' as $$
  select coalesce((select auth.jwt() ->> 'aal'), '') = 'aal2'
$$;

-- The editor's powers (approve, return or edit any piece) need the two-step
-- code as well as the password: a session at assurance level aal2. Signed in
-- with the password alone, the editor is treated like any member.
create or replace function desk.is_editor() returns boolean
language sql stable security definer set search_path = '' as $$
  select desk.aal2()
     and exists (select 1 from public.profiles where id = (select auth.uid()) and role = 'editor');
$$;

-- True unless the member has linked an authenticator app and this session has
-- not yet given its code. Used by the restrictive rules in section 8.
create or replace function desk.mfa_ok() returns boolean
language sql stable security definer set search_path = '' as $$
  select desk.aal2()
      or not exists (select 1 from auth.mfa_factors f
                     where f.user_id = (select auth.uid()) and f.status = 'verified');
$$;

-- May this session review (approve or send back) a piece by p_author in p_dept?
--   never their own piece; the editor any other piece; an expert the pieces of
--   their own department, except pieces by other experts and pieces that touch
--   a contested political dispute (those go to the editor). Reviewing always
--   needs the two-step code (aal2).
create or replace function desk.can_review(p_author uuid, p_dept text, p_contested boolean) returns boolean
language sql stable security definer set search_path = '' as $$
  select p_author is distinct from (select auth.uid())
     and desk.aal2()
     and (
       exists (select 1 from public.profiles r where r.id = (select auth.uid()) and r.role = 'editor')
       or (
         exists (select 1 from public.profiles r
                  where r.id = (select auth.uid()) and r.role = 'expert' and r.dept is not null and r.dept = p_dept)
         and not coalesce(p_contested, false)
         and not exists (select 1 from public.profiles a where a.id = p_author and a.role = 'expert')
       )
     );
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
  editor_note text,            -- the latest comment from the reviewer who sent it back
  slug text unique,            -- set on first approval; used in the public link
  submitted_at timestamptz,
  approved_at timestamptz,
  publish_on date,             -- the day it appears on the site (Bangkok time)
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.pieces add column if not exists dept text check (dept in ('health', 'gov'));
alter table public.pieces add column if not exists dispatch_id text;     -- the dispatch it was taken up from
alter table public.pieces add column if not exists cover_path text;      -- cover picture, in the covers bucket
alter table public.pieces add column if not exists cover_credit text;    -- who took it, and its licence
alter table public.pieces add column if not exists reviewed_by uuid references public.profiles (id) on delete set null;
alter table public.pieces add column if not exists returned_body text;   -- the text as it was when last sent back
-- Touches a contested political dispute: reviewed by the editor, never by an
-- expert (our experts include government employees, who are not tied to
-- contested disputes).
alter table public.pieces add column if not exists contested boolean not null default false;
create index if not exists pieces_author_idx on public.pieces (author);
create index if not exists pieces_status_idx on public.pieces (status, publish_on);
create index if not exists pieces_dept_idx on public.pieces (dept, status);

-- Pieces written before departments: health pieces to Public health, the rest
-- to Governance and development.
update public.pieces set dept = case when focus = 'health' then 'health' else 'gov' end where dept is null;

-- Keeps the review rules in the database, whatever the page sends.
create or replace function desk.pieces_guard() returns trigger
language plpgsql set search_path = '' as $$
declare
  me uuid := (select auth.uid());
  -- The editor, and the Supabase dashboard or SQL Editor (no signed-in member).
  editor boolean := me is null or desk.is_editor();
begin
  if tg_op = 'INSERT' then
    if not editor then
      new.author := me;
      if new.status is distinct from 'waiting' then new.status := 'draft'; end if;
      new.editor_note := null;
      new.slug := null;
      new.reviewed_by := null;
      new.returned_body := null;
    end if;
    new.created_at := now();
  else
    new.id := old.id;
    new.created_at := old.created_at;
    if not editor then
      new.author := old.author;
      new.slug := old.slug;
      if old.author = me then
        -- The writer: writes, submits, withdraws; never decides.
        new.editor_note := old.editor_note;
        new.reviewed_by := old.reviewed_by;
        new.returned_body := old.returned_body;
        if old.status in ('draft', 'returned') then
          if new.status not in ('draft', 'waiting', old.status) then
            raise exception 'Only a reviewer can approve or send back a piece';
          end if;
        elsif new.status <> 'draft' then
          -- waiting or approved: locked until the writer withdraws or reopens it
          raise exception 'Withdraw or reopen the piece before changing it';
        end if;
      elsif desk.can_review(old.author, old.dept, old.contested) then
        -- A reviewer: approves, sends back, or moves it back to waiting.
        -- The words stay the writer's; comments go in piece_notes.
        if old.status not in ('waiting', 'returned', 'approved') then
          raise exception 'This piece has not been sent for review';
        end if;
        if new.status not in ('waiting', 'returned', 'approved') then
          raise exception 'A reviewer can approve, send back or move a piece back to waiting';
        end if;
        new.title := old.title; new.summary := old.summary; new.body := old.body; new.sources := old.sources;
        new.focus := old.focus; new.photo := old.photo; new.idea_id := old.idea_id; new.dept := old.dept;
        new.dispatch_id := old.dispatch_id; new.file_path := old.file_path; new.file_name := old.file_name;
        new.cover_path := old.cover_path; new.cover_credit := old.cover_credit; new.returned_body := old.returned_body;
        new.contested := old.contested;
        if new.publish_on is not null and new.publish_on < desk.today() and new.publish_on is distinct from old.publish_on then
          new.publish_on := desk.today();
        end if;
      else
        raise exception 'Only the writer or a reviewer can change this piece';
      end if;
    end if;
  end if;

  -- Nobody approves their own piece, the editor included.
  if new.status = 'approved' and (tg_op = 'INSERT' or old.status is distinct from 'approved') and new.author = me then
    raise exception 'Someone else must approve your piece';
  end if;

  -- A piece sent for review belongs to a department; pieces from an older page
  -- that sent none follow their focus area.
  if new.status <> 'draft' and new.dept is null then
    new.dept := case when new.focus = 'health' then 'health' else 'gov' end;
  end if;

  if new.status = 'waiting' and (tg_op = 'INSERT' or old.status is distinct from 'waiting') then
    new.submitted_at := now();
  end if;

  -- Who decided, and the text as it stood when it was sent back (so the
  -- reviewer can see what changed when it comes back).
  if tg_op = 'UPDATE' and new.status in ('approved', 'returned') and old.status is distinct from new.status then
    new.reviewed_by := me;
    if new.status = 'returned' then new.returned_body := old.body; end if;
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
grant select (author, slug, title, summary, body, sources, focus, photo, status, publish_on, dept, cover_path, cover_credit) on public.pieces to anon;

revoke all on function desk.is_editor(), desk.today(), desk.login_team_id(text), desk.mfa_ok(), desk.aal2(), desk.can_review(uuid, text, boolean) from public;
grant execute on function desk.is_editor(), desk.today(), desk.aal2() to anon, authenticated;
grant execute on function desk.mfa_ok(), desk.can_review(uuid, text, boolean) to authenticated;
revoke all on function desk.guard_new_user(), desk.handle_new_user(), desk.pieces_guard() from public, anon, authenticated;

-- Members see the team (names, roles, departments): who took up a dispatch,
-- who wrote a piece they review. The public sees only authors of published pieces.
drop policy if exists "profiles: own or editor" on public.profiles;
drop policy if exists "profiles: the team" on public.profiles;
create policy "profiles: the team" on public.profiles
  for select to authenticated
  using (true);

drop policy if exists "profiles: authors of published pieces" on public.profiles;
create policy "profiles: authors of published pieces" on public.profiles
  for select to anon
  using (exists (select 1 from public.pieces p
                 where p.author = profiles.id and p.status = 'approved' and p.publish_on <= (select desk.today())));

drop policy if exists "profiles: editor updates" on public.profiles;
create policy "profiles: editor updates" on public.profiles
  for update to authenticated
  using ((select desk.is_editor())) with check ((select desk.is_editor()));

-- Members: their own pieces, anything published, and pieces sent to them for
-- review (never someone else's unsent draft). The editor sees everything.
drop policy if exists "pieces: read own or editor" on public.pieces;
drop policy if exists "pieces: read own, reviewing or published" on public.pieces;
create policy "pieces: read own, reviewing or published" on public.pieces
  for select to authenticated
  using (author = (select auth.uid()) or (select desk.is_editor())
         or (status = 'approved' and publish_on <= (select desk.today()))
         or (status in ('waiting', 'returned', 'approved') and desk.can_review(author, dept, contested)));

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
drop policy if exists "pieces: change own, reviewing or editor" on public.pieces;
create policy "pieces: change own, reviewing or editor" on public.pieces
  for update to authenticated
  using (author = (select auth.uid()) or (select desk.is_editor()) or desk.can_review(author, dept, contested))
  with check (author = (select auth.uid()) or (select desk.is_editor()) or desk.can_review(author, dept, contested));

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
         pr.name as author_name, pr.team_id as author_team,
         p.dept, p.cover_path, p.cover_credit
  from public.pieces p
  join public.profiles pr on pr.id = p.author
  where p.status = 'approved' and p.publish_on <= desk.today();

revoke all on public.briefings from public, anon, authenticated;
grant select on public.briefings to anon, authenticated;

-- 6. Uploaded documents and cover pictures --------------------------------

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

-- The writer, the editor, and the reviewers of the piece the document belongs to.
drop policy if exists "drafts: open own or editor" on storage.objects;
drop policy if exists "drafts: open own, reviewing or editor" on storage.objects;
create policy "drafts: open own, reviewing or editor" on storage.objects
  for select to authenticated
  using (bucket_id = 'drafts' and (
    (storage.foldername(name))[1] = (select auth.uid())::text or (select desk.is_editor())
    or exists (select 1 from public.pieces p
                where p.file_path = objects.name and p.status in ('waiting', 'returned', 'approved')
                  and desk.can_review(p.author, p.dept, p.contested))));

drop policy if exists "drafts: remove own or editor" on storage.objects;
create policy "drafts: remove own or editor" on storage.objects
  for delete to authenticated
  using (bucket_id = 'drafts' and ((storage.foldername(name))[1] = (select auth.uid())::text or (select desk.is_editor())));

-- Cover pictures: anyone with the link can see one (a published piece shows
-- its cover on the site); only the writer can add or remove their own.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('covers', 'covers', true, 10485760, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update
  set public = true, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "covers: upload to own folder" on storage.objects;
create policy "covers: upload to own folder" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'covers' and (storage.foldername(name))[1] = (select auth.uid())::text);

drop policy if exists "covers: list own or editor" on storage.objects;
create policy "covers: list own or editor" on storage.objects
  for select to authenticated
  using (bucket_id = 'covers' and ((storage.foldername(name))[1] = (select auth.uid())::text or (select desk.is_editor())));

drop policy if exists "covers: remove own or editor" on storage.objects;
create policy "covers: remove own or editor" on storage.objects
  for delete to authenticated
  using (bucket_id = 'covers' and ((storage.foldername(name))[1] = (select auth.uid())::text or (select desk.is_editor())));

-- 7. Tidy up helpers from an earlier version of this file ------------------

drop function if exists public.is_editor();
drop function if exists public.desk_today();
drop function if exists public.desk_team_id(text);
drop function if exists public.handle_new_user();
drop function if exists public.pieces_guard();

-- 8. Security: two-step sign-in and a record of approvals ---------------------
-- A member who has linked an authenticator app can do nothing on the desk
-- (read, write, upload, open files) until this session has given the code.
-- These rules are "restrictive": they apply on top of every rule above.

drop policy if exists "two-step: code given if turned on" on public.pieces;
create policy "two-step: code given if turned on" on public.pieces
  as restrictive for all to authenticated
  using ((select desk.mfa_ok())) with check ((select desk.mfa_ok()));

drop policy if exists "two-step: code given if turned on" on public.profiles;
create policy "two-step: code given if turned on" on public.profiles
  as restrictive for all to authenticated
  using ((select desk.mfa_ok())) with check ((select desk.mfa_ok()));

drop policy if exists "drafts: two-step code given if turned on" on storage.objects;
drop policy if exists "uploads: two-step code given if turned on" on storage.objects;
create policy "uploads: two-step code given if turned on" on storage.objects
  as restrictive for all to authenticated
  using (bucket_id not in ('drafts', 'covers') or (select desk.mfa_ok()))
  with check (bucket_id not in ('drafts', 'covers') or (select desk.mfa_ok()));

-- A record of every change that matters: a piece created or deleted, its
-- status or publish date changed, or anyone other than its author editing it.
-- Kept in the private desk schema: no page can read or change it. Read it in
-- the SQL Editor:  select * from desk.piece_log order by at desc limit 50;
create table if not exists desk.piece_log (
  id bigint generated always as identity primary key,
  at timestamptz not null default now(),
  piece_id uuid not null,
  piece_title text,
  actor uuid,                  -- the account that made the change (null: dashboard or SQL)
  actor_team text,
  aal text,                    -- aal2 = signed in with the two-step code
  op text not null,            -- insert | update | delete
  from_status text,
  to_status text,
  publish_on date,
  fields text[] not null default '{}'
);
create index if not exists piece_log_piece_idx on desk.piece_log (piece_id, at);
alter table desk.piece_log enable row level security;
revoke all on desk.piece_log from public, anon, authenticated;

create or replace function desk.log_piece() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  who uuid := (select auth.uid());
  changed text[] := '{}';
  row_new jsonb := case when tg_op <> 'DELETE' then to_jsonb(new) end;
  row_old jsonb := case when tg_op <> 'INSERT' then to_jsonb(old) end;
begin
  if tg_op = 'UPDATE' then
    if new.status is not distinct from old.status
       and new.publish_on is not distinct from old.publish_on
       and who is not distinct from new.author then
      return null;             -- the author's own writing and autosaves
    end if;
    select coalesce(array_agg(n.key order by n.key), '{}') into changed
      from jsonb_each(row_new) as n(key, value)
     where n.key not in ('updated_at', 'submitted_at', 'approved_at')
       and n.value is distinct from row_old -> n.key;
  end if;
  insert into desk.piece_log (piece_id, piece_title, actor, actor_team, aal, op, from_status, to_status, publish_on, fields)
  values ((coalesce(row_new, row_old) ->> 'id')::uuid, coalesce(row_new, row_old) ->> 'title', who,
          (select p.team_id from public.profiles p where p.id = who),
          (select auth.jwt() ->> 'aal'), lower(tg_op),
          row_old ->> 'status', row_new ->> 'status', (coalesce(row_new, row_old) ->> 'publish_on')::date, changed);
  return null;
end $$;
revoke all on function desk.log_piece() from public, anon, authenticated;

drop trigger if exists pieces_log on public.pieces;
create trigger pieces_log after insert or update or delete on public.pieces
  for each row execute function desk.log_piece();

-- 9. Comments and questions on a piece --------------------------------------
-- A reviewer sends a piece back with comments and questions; the writer can
-- answer when they send it again. Both see the whole thread. Notes are never
-- edited or removed (only the editor can remove one), so the record stays.

create table if not exists public.piece_notes (
  id uuid primary key default gen_random_uuid(),
  piece_id uuid not null references public.pieces (id) on delete cascade,
  author uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  kind text not null default 'review' check (kind in ('review', 'reply')),
  body text not null check (length(trim(body)) between 1 and 8000),
  created_at timestamptz not null default now()
);
create index if not exists piece_notes_piece_idx on public.piece_notes (piece_id, created_at);

-- Who wrote it and when are set here, whatever the page sends.
create or replace function desk.notes_guard() returns trigger
language plpgsql set search_path = '' as $$
begin
  new.author := (select auth.uid());
  new.created_at := now();
  new.kind := case when exists (select 1 from public.pieces p where p.id = new.piece_id and p.author = new.author)
                   then 'reply' else 'review' end;
  return new;
end $$;
revoke all on function desk.notes_guard() from public, anon, authenticated;
drop trigger if exists piece_notes_guard on public.piece_notes;
create trigger piece_notes_guard before insert on public.piece_notes
  for each row execute function desk.notes_guard();

alter table public.piece_notes enable row level security;
revoke all on public.piece_notes from public, anon, authenticated;
grant select, insert, delete on public.piece_notes to authenticated;

-- The writer of the piece and its reviewers (the subquery on pieces follows
-- the pieces rules above, so it only finds pieces this member may see).
drop policy if exists "notes: writer and reviewers read" on public.piece_notes;
create policy "notes: writer and reviewers read" on public.piece_notes
  for select to authenticated
  using (exists (select 1 from public.pieces p where p.id = piece_id
                  and (p.author = (select auth.uid()) or (select desk.is_editor()) or desk.can_review(p.author, p.dept, p.contested))));

drop policy if exists "notes: writer and reviewers write" on public.piece_notes;
create policy "notes: writer and reviewers write" on public.piece_notes
  for insert to authenticated
  with check (author = (select auth.uid())
              and exists (select 1 from public.pieces p where p.id = piece_id
                           and (p.author = (select auth.uid()) or (select desk.is_editor()) or desk.can_review(p.author, p.dept, p.contested))));

drop policy if exists "notes: editor removes" on public.piece_notes;
create policy "notes: editor removes" on public.piece_notes
  for delete to authenticated
  using ((select desk.is_editor()));

drop policy if exists "two-step: code given if turned on" on public.piece_notes;
create policy "two-step: code given if turned on" on public.piece_notes
  as restrictive for all to authenticated
  using ((select desk.mfa_ok())) with check ((select desk.mfa_ok()));

-- 10. Take-ups: one person per dispatch --------------------------------------
-- A member takes up a dispatch (Free → Taken up). Everyone on the team sees
-- who has it. The member can give it back; the editor, or an expert of its
-- department, can free one that has stalled.

create table if not exists public.takeups (
  dispatch_id text primary key check (dispatch_id ~ '^[a-z0-9-]{1,80}$'),
  member uuid not null default auth.uid() references public.profiles (id) on delete cascade,
  dept text not null check (dept in ('health', 'gov')),
  piece_id uuid references public.pieces (id) on delete set null,
  taken_at timestamptz not null default now()
);
-- The dispatch's headline when it was taken up, so it still reads well after
-- the dispatch leaves the current list.
alter table public.takeups add column if not exists title text check (length(title) <= 300);
create index if not exists takeups_member_idx on public.takeups (member);

create or replace function desk.takeups_guard() returns trigger
language plpgsql set search_path = '' as $$
begin
  if tg_op = 'INSERT' then
    if not desk.is_editor() or new.member is null then new.member := (select auth.uid()); end if;
    new.taken_at := now();
  else
    new.dispatch_id := old.dispatch_id;
    new.member := old.member;
    new.dept := old.dept;
    new.title := old.title;
    new.taken_at := old.taken_at;
  end if;
  if new.piece_id is not null and not exists (
       select 1 from public.pieces p where p.id = new.piece_id and p.author = new.member) then
    raise exception 'A take-up can only point to its member''s own piece';
  end if;
  return new;
end $$;
revoke all on function desk.takeups_guard() from public, anon, authenticated;
drop trigger if exists takeups_guard on public.takeups;
create trigger takeups_guard before insert or update on public.takeups
  for each row execute function desk.takeups_guard();

alter table public.takeups enable row level security;
revoke all on public.takeups from public, anon, authenticated;
grant select, insert, update, delete on public.takeups to authenticated;

drop policy if exists "takeups: the team sees them" on public.takeups;
create policy "takeups: the team sees them" on public.takeups
  for select to authenticated
  using (true);

drop policy if exists "takeups: take one up" on public.takeups;
create policy "takeups: take one up" on public.takeups
  for insert to authenticated
  with check (member = (select auth.uid()) or (select desk.is_editor()));

drop policy if exists "takeups: link own piece" on public.takeups;
create policy "takeups: link own piece" on public.takeups
  for update to authenticated
  using (member = (select auth.uid())) with check (member = (select auth.uid()));

drop policy if exists "takeups: give back or free" on public.takeups;
create policy "takeups: give back or free" on public.takeups
  for delete to authenticated
  using (member = (select auth.uid()) or (select desk.is_editor())
         or (desk.aal2() and exists (select 1 from public.profiles r
                                      where r.id = (select auth.uid()) and r.role = 'expert' and r.dept = takeups.dept)));

drop policy if exists "two-step: code given if turned on" on public.takeups;
create policy "two-step: code given if turned on" on public.takeups
  as restrictive for all to authenticated
  using ((select desk.mfa_ok())) with check ((select desk.mfa_ok()));

-- 11. Version, so the pages can tell when this file has not been run yet ---

create or replace function public.desk_version() returns integer
language sql immutable set search_path = '' as $$ select 2 $$;
revoke all on function public.desk_version() from public;
grant execute on function public.desk_version() to anon, authenticated;
