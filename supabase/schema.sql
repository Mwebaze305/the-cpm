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
--     - nobody reviews or approves their own piece, except that the editor
--       may publish their own piece once it has been sent for review
--       (recorded in desk.piece_log)
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
--   proposal_team   the people the editor confirmed on each proposal
--   proposal_drafts each proposal's shared draft, for its people and the editor
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

  -- Nobody approves their own piece, with one exception: the editor may
  -- publish their own piece once it has been sent for review (it is waiting),
  -- with the two-step code. desk.piece_log records that the editor did it.
  if new.status = 'approved' and (tg_op = 'INSERT' or old.status is distinct from 'approved') and new.author = me
     and not (tg_op = 'UPDATE' and old.status = 'waiting' and desk.is_editor()) then
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

-- 11. Proposals: two members on each, and their shared private draft --------
-- assets/js/proposals.js suggests proposals for calls in opportunities.js,
-- each with two team members. The editor confirms the two (or changes them):
-- that is proposal_team. Only then can those two, and the editor, open and
-- write the proposal's shared draft: that is proposal_drafts. Everyone on the
-- team sees who is on which proposal; nobody else sees the drafts.

create table if not exists public.proposal_team (
  proposal_id text primary key check (proposal_id ~ '^[a-z0-9-]{1,80}$'),
  members text[] not null,      -- team ids from desk.members, e.g. {albert,badri}
  confirmed_by uuid references public.profiles (id) on delete set null,
  confirmed_at timestamptz not null default now()
);

create or replace function desk.proposal_team_guard() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if tg_op = 'UPDATE' then new.proposal_id := old.proposal_id; end if;
  -- one to three different people, all on the team list
  if coalesce(array_length(new.members, 1), 0) not between 1 and 3
     or (select count(distinct m) from unnest(new.members) m) <> array_length(new.members, 1)
     or exists (select 1 from unnest(new.members) m where not exists (select 1 from desk.members d where d.team_id = m)) then
    raise exception 'Choose one to three people from the team';
  end if;
  new.confirmed_by := (select auth.uid());
  new.confirmed_at := now();
  return new;
end $$;
revoke all on function desk.proposal_team_guard() from public, anon, authenticated;
drop trigger if exists proposal_team_guard on public.proposal_team;
create trigger proposal_team_guard before insert or update on public.proposal_team
  for each row execute function desk.proposal_team_guard();

-- Is the signed-in member one of the confirmed people on this proposal?
create or replace function desk.on_proposal(p_id text) returns boolean
language sql stable security definer set search_path = '' as $$
  select exists (select 1 from public.proposal_team t
                   join public.profiles p on p.team_id = any (t.members)
                  where t.proposal_id = p_id and p.id = (select auth.uid()));
$$;

alter table public.proposal_team enable row level security;
revoke all on public.proposal_team from public, anon, authenticated;
grant select, insert, update, delete on public.proposal_team to authenticated;

drop policy if exists "proposal team: the team sees it" on public.proposal_team;
create policy "proposal team: the team sees it" on public.proposal_team
  for select to authenticated
  using (true);

drop policy if exists "proposal team: the editor confirms" on public.proposal_team;
create policy "proposal team: the editor confirms" on public.proposal_team
  for all to authenticated
  using ((select desk.is_editor())) with check ((select desk.is_editor()));

drop policy if exists "two-step: code given if turned on" on public.proposal_team;
create policy "two-step: code given if turned on" on public.proposal_team
  as restrictive for all to authenticated
  using ((select desk.mfa_ok())) with check ((select desk.mfa_ok()));

create table if not exists public.proposal_drafts (
  proposal_id text primary key check (proposal_id ~ '^[a-z0-9-]{1,80}$'),
  title text not null default '' check (length(title) <= 300),
  body text not null default '' check (length(body) <= 100000),
  status text not null default 'draft' check (status in ('draft', 'ready', 'submitted')),
  rev integer not null default 1,   -- goes up with every save, so two people never overwrite each other unseen
  updated_by uuid references public.profiles (id) on delete set null,
  updated_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

-- draft → ready (for the editor to read) → submitted (the editor sent it).
-- Members move it between draft and ready; only the editor marks it submitted.
create or replace function desk.proposal_drafts_guard() returns trigger
language plpgsql set search_path = '' as $$
declare
  editor boolean := (select auth.uid()) is null or desk.is_editor();
begin
  if tg_op = 'INSERT' then
    new.rev := 1;
    new.created_at := now();
  else
    new.proposal_id := old.proposal_id;
    new.created_at := old.created_at;
    new.rev := old.rev + 1;
  end if;
  if not editor and new.status = 'submitted' and (tg_op = 'INSERT' or old.status is distinct from 'submitted') then
    raise exception 'Only the editor marks a proposal as submitted';
  end if;
  if not editor and tg_op = 'UPDATE' and old.status = 'submitted' and new.status <> 'submitted' then
    raise exception 'Only the editor can reopen a submitted proposal';
  end if;
  new.updated_by := (select auth.uid());
  new.updated_at := now();
  return new;
end $$;
revoke all on function desk.proposal_drafts_guard() from public, anon, authenticated;
drop trigger if exists proposal_drafts_guard on public.proposal_drafts;
create trigger proposal_drafts_guard before insert or update on public.proposal_drafts
  for each row execute function desk.proposal_drafts_guard();

alter table public.proposal_drafts enable row level security;
revoke all on public.proposal_drafts from public, anon, authenticated;
grant select, insert, update, delete on public.proposal_drafts to authenticated;

drop policy if exists "proposal drafts: its two people and the editor" on public.proposal_drafts;
create policy "proposal drafts: its two people and the editor" on public.proposal_drafts
  for select to authenticated
  using ((select desk.is_editor()) or desk.on_proposal(proposal_id));

drop policy if exists "proposal drafts: start" on public.proposal_drafts;
create policy "proposal drafts: start" on public.proposal_drafts
  for insert to authenticated
  with check ((select desk.is_editor()) or desk.on_proposal(proposal_id));

drop policy if exists "proposal drafts: write" on public.proposal_drafts;
create policy "proposal drafts: write" on public.proposal_drafts
  for update to authenticated
  using ((select desk.is_editor()) or desk.on_proposal(proposal_id))
  with check ((select desk.is_editor()) or desk.on_proposal(proposal_id));

drop policy if exists "proposal drafts: the editor removes" on public.proposal_drafts;
create policy "proposal drafts: the editor removes" on public.proposal_drafts
  for delete to authenticated
  using ((select desk.is_editor()));

drop policy if exists "two-step: code given if turned on" on public.proposal_drafts;
create policy "two-step: code given if turned on" on public.proposal_drafts
  as restrictive for all to authenticated
  using ((select desk.mfa_ok())) with check ((select desk.mfa_ok()));

-- 12. Emails ----------------------------------------------------------------
-- Only the events that matter send an email, so nobody learns to ignore them:
--   * a piece is sent for review, sent back, or approved (and resubmitted);
--   * the editor confirms two people on a proposal; a proposal draft is ready;
--   * one nudge, and a second a few days later, for work left waiting;
--   * a digest every two weeks.
-- Saving, commenting and reading never send anything.
-- The triggers below only queue an email (public.outbox). The Edge Function in
-- supabase/functions/notify sends the queue every few minutes and writes the
-- digest. Addresses are kept only in public.member_contacts, never in the
-- public repository. To switch it on, see "Emails" in README.md.

-- The team id of the signed-in member.
create or replace function desk.my_team() returns text
language sql stable security definer set search_path = '' as $$
  select team_id from public.profiles where id = (select auth.uid())
$$;

-- Each member's address and two switches. A member sees and changes their own
-- row; the editor sees and changes every row; nobody else sees any address.
create table if not exists public.member_contacts (
  team_id text primary key references desk.members (team_id) on delete cascade,
  email text,
  work_on boolean not null default true,      -- emails about work: review, corrections, approval, proposals, nudges
  digest_on boolean not null default true,    -- the digest every two weeks
  updated_at timestamptz not null default now(),
  constraint member_contacts_email_ok check (
    email is null or (length(email) <= 254 and email ~ '^[^@[:space:],;<>]+@[^@[:space:],;<>]+\.[^@[:space:],;<>]+$'))
);

create or replace function desk.member_contacts_guard() returns trigger
language plpgsql set search_path = '' as $$
begin
  if tg_op = 'UPDATE' then new.team_id := old.team_id; end if;
  new.email := nullif(lower(btrim(new.email)), '');
  new.updated_at := now();
  return new;
end $$;
revoke all on function desk.member_contacts_guard() from public, anon, authenticated;
drop trigger if exists member_contacts_guard on public.member_contacts;
create trigger member_contacts_guard before insert or update on public.member_contacts
  for each row execute function desk.member_contacts_guard();

alter table public.member_contacts enable row level security;
revoke all on public.member_contacts from public, anon, authenticated;
grant select on public.member_contacts to authenticated;
grant insert (team_id, email, work_on, digest_on) on public.member_contacts to authenticated;
grant update (email, work_on, digest_on) on public.member_contacts to authenticated;

drop policy if exists "contacts: your own, or the editor's" on public.member_contacts;
create policy "contacts: your own, or the editor's" on public.member_contacts
  for select to authenticated
  using (team_id = (select desk.my_team()) or (select desk.is_editor()));

drop policy if exists "contacts: add your own, or the editor adds" on public.member_contacts;
create policy "contacts: add your own, or the editor adds" on public.member_contacts
  for insert to authenticated
  with check (team_id = (select desk.my_team()) or (select desk.is_editor()));

drop policy if exists "contacts: change your own, or the editor changes" on public.member_contacts;
create policy "contacts: change your own, or the editor changes" on public.member_contacts
  for update to authenticated
  using (team_id = (select desk.my_team()) or (select desk.is_editor()))
  with check (team_id = (select desk.my_team()) or (select desk.is_editor()));

drop policy if exists "two-step: code given if turned on" on public.member_contacts;
create policy "two-step: code given if turned on" on public.member_contacts
  as restrictive for all to authenticated
  using ((select desk.mfa_ok())) with check ((select desk.mfa_ok()));

-- The queue. No page can read or write it (no policy, no rights): the triggers
-- below fill it, and the Edge Function (service role) empties it.
create table if not exists public.outbox (
  id bigint generated always as identity primary key,
  kind text not null,          -- submitted | resubmitted | returned | approved | approved_editor | proposal_team | proposal_ready | proposal_new | reminder | digest | test
  to_team text not null references desk.members (team_id) on delete cascade,
  piece_id uuid references public.pieces (id) on delete cascade,
  proposal_id text,
  data jsonb not null default '{}'::jsonb,
  dedupe_key text unique,      -- the same event never queues twice
  send_after timestamptz not null default now(),
  created_at timestamptz not null default now(),
  claimed_at timestamptz,
  sent_at timestamptz,
  skipped text,                -- why it was not sent (no address, emails off, no longer needed)
  attempts integer not null default 0,
  last_error text
);
create index if not exists outbox_due_idx on public.outbox (send_after) where sent_at is null and skipped is null;
alter table public.outbox enable row level security;
revoke all on public.outbox from public, anon, authenticated;

-- What the sender remembers between runs (when the digest last went out, when
-- the proposals list was last read) and which proposals the editor has been told about.
create table if not exists public.mail_state (
  key text primary key,
  value text,
  at timestamptz not null default now()
);
alter table public.mail_state enable row level security;
revoke all on public.mail_state from public, anon, authenticated;

create table if not exists public.proposal_notices (
  proposal_id text primary key,
  at timestamptz not null default now()
);
alter table public.proposal_notices enable row level security;
revoke all on public.proposal_notices from public, anon, authenticated;

-- Queue one email. Used by the triggers only.
create or replace function desk.queue_mail(p_kind text, p_to text, p_piece uuid, p_proposal text, p_data jsonb, p_key text, p_delay interval)
returns void language sql security definer set search_path = '' as $$
  insert into public.outbox (kind, to_team, piece_id, proposal_id, data, dedupe_key, send_after)
  values (p_kind, p_to, p_piece, p_proposal, coalesce(p_data, '{}'::jsonb), p_key, now() + p_delay)
  on conflict (dedupe_key) do nothing
$$;
revoke all on function desk.queue_mail(text, text, uuid, text, jsonb, text, interval) from public, anon, authenticated;

-- Who reviews a piece: the experts of its department; the editor when it is
-- contested, written by an expert, or the department has no other expert.
-- Never the writer.
create or replace function desk.piece_reviewers(p_author uuid, p_dept text, p_contested boolean) returns setof text
language plpgsql stable security definer set search_path = '' as $$
declare a_team text; a_role text;
begin
  select team_id, role into a_team, a_role from public.profiles where id = p_author;
  if not coalesce(p_contested, false) and coalesce(a_role, '') <> 'expert' then
    if exists (select 1 from desk.members m where m.role = 'expert' and m.dept = p_dept and m.team_id is distinct from a_team) then
      return query select m.team_id from desk.members m
                    where m.role = 'expert' and m.dept = p_dept and m.team_id is distinct from a_team;
      return;
    end if;
  end if;
  return query select m.team_id from desk.members m where m.role = 'editor' and m.team_id is distinct from a_team;
end $$;
revoke all on function desk.piece_reviewers(uuid, text, boolean) from public, anon, authenticated;

-- A piece changes status: sent for review (or sent again), sent back, approved.
-- The email waits two minutes, and is sent only if the piece is still in that status.
create or replace function desk.notify_piece() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  actor_team text := desk.my_team();
  author_team text := (select p.team_id from public.profiles p where p.id = new.author);
  stamp text := to_char(now(), 'YYYYMMDDHH24MISSUS');
  again boolean := false;
  t text;
begin
  if tg_op = 'UPDATE' then
    if new.status is not distinct from old.status then return null; end if;
    again := old.status = 'returned';
  end if;
  if new.status = 'waiting' then
    for t in select * from desk.piece_reviewers(new.author, new.dept, new.contested) loop
      perform desk.queue_mail(case when again then 'resubmitted' else 'submitted' end, t, new.id, null, '{}'::jsonb,
                              'p:' || new.id || ':waiting:' || t || ':' || stamp, interval '2 minutes');
    end loop;
  elsif new.status = 'returned' then
    if author_team is not null and author_team is distinct from actor_team then
      perform desk.queue_mail('returned', author_team, new.id, null, jsonb_build_object('by', actor_team),
                              'p:' || new.id || ':returned:' || stamp, interval '2 minutes');
    end if;
  elsif new.status = 'approved' then
    if author_team is not null and author_team is distinct from actor_team then
      perform desk.queue_mail('approved', author_team, new.id, null, jsonb_build_object('by', actor_team),
                              'p:' || new.id || ':approved:' || stamp, interval '2 minutes');
    end if;
    -- the editor is told what goes out when an expert approved it
    for t in select m.team_id from desk.members m
              where m.role = 'editor' and m.team_id is distinct from actor_team and m.team_id is distinct from author_team loop
      perform desk.queue_mail('approved_editor', t, new.id, null, jsonb_build_object('by', actor_team),
                              'p:' || new.id || ':approved:' || t || ':' || stamp, interval '2 minutes');
    end loop;
  end if;
  return null;
end $$;
revoke all on function desk.notify_piece() from public, anon, authenticated;
drop trigger if exists pieces_notify on public.pieces;
create trigger pieces_notify after insert or update of status on public.pieces
  for each row execute function desk.notify_piece();

-- The editor confirms (or changes) the people on a proposal: the people newly
-- on it are told, ten minutes later, if they are still on it. Never the editor
-- about their own confirmation.
create or replace function desk.notify_proposal_team() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  actor_team text := desk.my_team();
  m text;
begin
  for m in select unnest(new.members) loop
    if tg_op = 'UPDATE' and m = any (old.members) then continue; end if;
    if m is not distinct from actor_team then continue; end if;
    perform desk.queue_mail('proposal_team', m, null, new.proposal_id, '{}'::jsonb,
                            'prop:' || new.proposal_id || ':' || m, interval '10 minutes');
  end loop;
  return null;
end $$;
revoke all on function desk.notify_proposal_team() from public, anon, authenticated;
drop trigger if exists proposal_team_notify on public.proposal_team;
create trigger proposal_team_notify after insert or update of members on public.proposal_team
  for each row execute function desk.notify_proposal_team();

-- A proposal draft is marked ready: the editor is told, if it is still ready.
create or replace function desk.notify_proposal_draft() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
  actor_team text := desk.my_team();
  t text;
begin
  if tg_op = 'UPDATE' and new.status is not distinct from old.status then return null; end if;
  if new.status = 'ready' then
    for t in select m.team_id from desk.members m where m.role = 'editor' and m.team_id is distinct from actor_team loop
      perform desk.queue_mail('proposal_ready', t, null, new.proposal_id, jsonb_build_object('by', actor_team),
                              'ready:' || new.proposal_id || ':' || t || ':' || new.rev, interval '5 minutes');
    end loop;
  end if;
  return null;
end $$;
revoke all on function desk.notify_proposal_draft() from public, anon, authenticated;
drop trigger if exists proposal_drafts_notify on public.proposal_drafts;
create trigger proposal_drafts_notify after insert or update of status on public.proposal_drafts
  for each row execute function desk.notify_proposal_draft();

-- Work left waiting. Run once a day (see supabase/mail-schedule.sql). A piece
-- waiting for review is raised with its reviewers after 3 days, and again after
-- 7 (the editor is copied the second time); a piece sent back, with its writer
-- after 5 days and again after 10. Never more than two per piece, and one email
-- per person per day listing everything.
create table if not exists desk.piece_reminders (
  piece_id uuid primary key references public.pieces (id) on delete cascade,
  stage text not null,
  since timestamptz not null,
  sent integer not null default 0,
  last_at timestamptz
);
alter table desk.piece_reminders enable row level security;
revoke all on desk.piece_reminders from public, anon, authenticated;

create or replace function desk.queue_reminders() returns integer
language plpgsql security definer set search_path = '' as $$
declare
  r record; rem record; v_rows jsonb := '[]'::jsonb;
  v_since timestamptz; v_days integer; v_sent integer; v_nth integer; v_t1 integer; v_t2 integer;
  t text; a_team text; n integer := 0;
  today text := to_char(desk.today(), 'YYYY-MM-DD');
begin
  for r in select p.id, p.title, p.status, p.author, p.dept, p.contested, p.updated_at from public.pieces p
            where p.status in ('waiting', 'returned') loop
    v_since := coalesce((select max(l.at) from desk.piece_log l where l.piece_id = r.id and l.to_status = r.status), r.updated_at);
    v_days := floor(extract(epoch from (now() - v_since)) / 86400);
    select * into rem from desk.piece_reminders pr where pr.piece_id = r.id;
    if not found or rem.stage <> r.status or rem.since is distinct from v_since then
      insert into desk.piece_reminders (piece_id, stage, since, sent) values (r.id, r.status, v_since, 0)
      on conflict (piece_id) do update set stage = excluded.stage, since = excluded.since, sent = 0, last_at = null;
      v_sent := 0;
    else
      v_sent := rem.sent;
    end if;
    -- waiting for review: nudges at 3 and 7 days; sent back: at 5 and 10
    v_t1 := case when r.status = 'waiting' then 3 else 5 end;
    v_t2 := case when r.status = 'waiting' then 7 else 10 end;
    if v_sent = 0 and v_days >= v_t1 then v_nth := 1;
    elsif v_sent = 1 and v_days >= v_t2 then v_nth := 2;
    else continue;
    end if;
    if r.status = 'waiting' then
      for t in select * from desk.piece_reviewers(r.author, r.dept, r.contested) loop
        v_rows := v_rows || jsonb_build_array(jsonb_build_object('to_team', t, 'piece_id', r.id, 'title', r.title, 'stage', r.status, 'days', v_days, 'nth', v_nth));
      end loop;
      if v_nth = 2 then
        select pr.team_id into a_team from public.profiles pr where pr.id = r.author;
        for t in select m.team_id from desk.members m where m.role = 'editor' and m.team_id is distinct from a_team loop
          v_rows := v_rows || jsonb_build_array(jsonb_build_object('to_team', t, 'piece_id', r.id, 'title', r.title, 'stage', r.status, 'days', v_days, 'nth', v_nth));
        end loop;
      end if;
    else
      select pr.team_id into a_team from public.profiles pr where pr.id = r.author;
      if a_team is not null then v_rows := v_rows || jsonb_build_array(jsonb_build_object('to_team', a_team, 'piece_id', r.id, 'title', r.title, 'stage', r.status, 'days', v_days, 'nth', v_nth)); end if;
    end if;
    update desk.piece_reminders set sent = v_nth, last_at = now() where piece_id = r.id;
  end loop;
  insert into public.outbox (kind, to_team, data, dedupe_key)
  select 'reminder', x.to_team,
         jsonb_build_object('items', jsonb_agg(jsonb_build_object('piece_id', x.piece_id, 'title', x.title, 'stage', x.stage, 'days', x.days, 'nth', x.nth) order by x.days desc)),
         'reminder:' || x.to_team || ':' || today
    from (select distinct on (j.to_team, j.piece_id) * from jsonb_to_recordset(v_rows) as j(to_team text, piece_id uuid, title text, stage text, days integer, nth integer)
          order by j.to_team, j.piece_id) x
   group by x.to_team
  on conflict (dedupe_key) do nothing;
  get diagnostics n = row_count;
  return n;
end $$;
revoke all on function desk.queue_reminders() from public, anon, authenticated;

-- 13. Version, so the pages can tell when this file has not been run yet ---
-- 2: departments, take-ups and notes. 3: proposals (section 11). 4: emails
-- (section 12). Pages that need 2 keep working at 4; the proposals' shared
-- drafts need 3; the email settings need 4.

create or replace function public.desk_version() returns integer
language sql immutable set search_path = '' as $$ select 4 $$;
revoke all on function public.desk_version() from public;
grant execute on function public.desk_version() to anon, authenticated;
