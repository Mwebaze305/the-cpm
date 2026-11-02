-- The Credence Letters: expert desk and Briefings
--
-- Run this once in Supabase (SQL Editor → New query → paste → Run).
-- It is safe to run again after an update.
--
-- What it sets up:
--   profiles   one row per account: name, team id (from assets/js/team.js), role
--   pieces     what experts write, with the approval status:
--                draft → waiting (Publish pressed) → approved (by the editor)
--                or waiting → returned (sent back with a note) → waiting again
--   briefings  a public view of approved pieces whose publish date has arrived
--   drafts     a private storage bucket for uploaded documents
--
-- Access rules (row-level security):
--   - Experts see and change only their own pieces, and only while they are a
--     draft or returned. Pressing Publish locks a piece; withdrawing it (or
--     reopening an approved piece) turns it back into a draft.
--   - Only the editor can approve, schedule or return a piece.
--   - The public can read nothing but the briefings view.
--   - Uploaded documents sit in each author's own folder; only the author and
--     the editor can open them.

-- 1. Accounts --------------------------------------------------------------

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  name text not null default '',
  team_id text,                -- the member's id in assets/js/team.js, e.g. 'dominick'
  role text not null default 'expert' check (role in ('expert', 'researcher', 'editor')),
  created_at timestamptz not null default now()
);

-- Every new account (created from an invitation) gets a profile.
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, name)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'name', ''))
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- Accounts that existed before this script ran.
insert into public.profiles (id) select id from auth.users on conflict (id) do nothing;

create or replace function public.is_editor() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'editor');
$$;

-- Today's date where the editor works (Chiang Rai), used for publish dates.
create or replace function public.desk_today() returns date
language sql stable as $$ select (now() at time zone 'Asia/Bangkok')::date $$;

-- 2. Pieces ----------------------------------------------------------------

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
create or replace function public.pieces_guard() returns trigger
language plpgsql set search_path = public as $$
declare
  editor boolean := public.is_editor();
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
    if new.publish_on is null then new.publish_on := public.desk_today(); end if;
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
  for each row execute function public.pieces_guard();

-- 3. Access rules ----------------------------------------------------------

alter table public.profiles enable row level security;
alter table public.pieces enable row level security;
revoke all on public.profiles, public.pieces from anon;
grant select, update on public.profiles to authenticated;
grant select, insert, update, delete on public.pieces to authenticated;
grant execute on function public.is_editor(), public.desk_today() to anon, authenticated;

drop policy if exists "profiles: own or editor" on public.profiles;
create policy "profiles: own or editor" on public.profiles
  for select to authenticated using (id = auth.uid() or public.is_editor());

drop policy if exists "profiles: editor updates" on public.profiles;
create policy "profiles: editor updates" on public.profiles
  for update to authenticated using (public.is_editor()) with check (public.is_editor());

drop policy if exists "pieces: read own or editor" on public.pieces;
create policy "pieces: read own or editor" on public.pieces
  for select to authenticated using (author = auth.uid() or public.is_editor());

drop policy if exists "pieces: add own" on public.pieces;
create policy "pieces: add own" on public.pieces
  for insert to authenticated with check (author = auth.uid() or public.is_editor());

drop policy if exists "pieces: change own or editor" on public.pieces;
create policy "pieces: change own or editor" on public.pieces
  for update to authenticated
  using (author = auth.uid() or public.is_editor())
  with check (author = auth.uid() or public.is_editor());

drop policy if exists "pieces: delete own drafts or editor" on public.pieces;
create policy "pieces: delete own drafts or editor" on public.pieces
  for delete to authenticated
  using ((author = auth.uid() and status in ('draft', 'returned')) or public.is_editor());

-- 4. Briefings: what the public site reads ---------------------------------
-- A view owned by the database, so it shows approved, published pieces and
-- only these columns, without opening the pieces table to the public.

drop view if exists public.briefings;
create view public.briefings as
  select p.slug, p.title, p.summary, p.body, p.sources, p.focus, p.photo, p.publish_on,
         pr.name as author_name, pr.team_id as author_team
  from public.pieces p
  join public.profiles pr on pr.id = p.author
  where p.status = 'approved' and p.publish_on <= public.desk_today();

grant select on public.briefings to anon, authenticated;

-- 5. Uploaded documents ----------------------------------------------------

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
  with check (bucket_id = 'drafts' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "drafts: open own or editor" on storage.objects;
create policy "drafts: open own or editor" on storage.objects
  for select to authenticated
  using (bucket_id = 'drafts' and ((storage.foldername(name))[1] = auth.uid()::text or public.is_editor()));

drop policy if exists "drafts: remove own or editor" on storage.objects;
create policy "drafts: remove own or editor" on storage.objects
  for delete to authenticated
  using (bucket_id = 'drafts' and ((storage.foldername(name))[1] = auth.uid()::text or public.is_editor()));
