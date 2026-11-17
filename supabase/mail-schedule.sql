-- The schedule that sends the team's emails (see "Emails" in README.md).
-- Run once in the Supabase SQL Editor after schema.sql, and again only if you
-- change it. Before running, replace <ANON_KEY> with the project's legacy
-- "anon" key (Project Settings -> API Keys -> Legacy API keys). That key is
-- public by design, but keep it out of this file in the repository.
--
-- 1. Every 5 minutes the notify function sends what is queued in public.outbox
--    (and, hourly, looks for new proposals; every second Monday, builds the digest).
-- 2. Every day at 01:00 UTC (08:00 in Bangkok) work left waiting is queued as a reminder.

create extension if not exists pg_cron;
create extension if not exists pg_net;

select cron.schedule('credence-mail-tick', '*/5 * * * *', $job$
  select net.http_post(
    url := 'https://vxhbfgkfarpiokkiwkkp.supabase.co/functions/v1/notify',
    headers := jsonb_build_object('Content-Type', 'application/json',
      'Authorization', 'Bearer <ANON_KEY>'),
    body := '{}'::jsonb,
    timeout_milliseconds := 55000)
$job$);

select cron.schedule('credence-reminders', '0 1 * * *', $job$ select desk.queue_reminders() $job$);

-- To pause every email: select cron.unschedule('credence-mail-tick');
-- To start again, run the first cron.schedule above.
