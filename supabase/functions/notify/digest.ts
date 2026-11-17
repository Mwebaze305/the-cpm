// What goes into one member's fortnightly digest. Pure: no database, no mail.
// Nothing to say means no digest: an empty email is never sent.

import { daysBetween, type Person } from "./templates.ts";

type PieceRow = { author: string; dept: string | null; contested: boolean; status: string };

// Who reviews a waiting piece (the same rule as desk.piece_reviewers in schema.sql).
export function reviewersOf(piece: PieceRow, people: Record<string, Person>, byId: Record<string, Person>): string[] {
  const author = byId[piece.author];
  const editors = Object.values(people).filter((x) => x.role === "editor" && x.team_id !== author?.team_id).map((x) => x.team_id);
  if (piece.contested || author?.role === "expert") return editors;
  const experts = Object.values(people).filter((x) => x.role === "expert" && x.dept === piece.dept && x.team_id !== author?.team_id).map((x) => x.team_id);
  return experts.length ? experts : editors;
}

export function buildDigest(o: {
  person: Person; people: Record<string, Person>; byId: Record<string, Person>; today: string;
  ideas: any[]; proposals: any[]; teams: { proposal_id: string; members: string[] }[]; pieces: PieceRow[];
}): any | null {
  const me = o.person.team_id;
  const ideas = o.ideas
    .filter((i) => Array.isArray(i.for) && i.for.includes(me) && i.date && daysBetween(i.date, o.today) <= 14 && daysBetween(i.date, o.today) >= -1)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .slice(0, 5)
    .map((i) => ({ id: i.id, title: i.title, date: i.date, also: (i.for as string[]).filter((x) => x !== me && o.people[x]) }));

  const open = o.proposals.filter((x) => x.deadline && daysBetween(o.today, x.deadline) >= 0);
  const confirmed = new Map(o.teams.map((t) => [t.proposal_id, t.members]));
  const proposals = open
    .filter((x) => (confirmed.get(x.id) || []).includes(me))
    .sort((a, b) => String(a.deadline).localeCompare(String(b.deadline)))
    .slice(0, 4)
    .map((x) => ({ item: x, team: confirmed.get(x.id) }));
  const unconfirmed = o.person.role === "editor" ? open.filter((x) => !confirmed.has(x.id)).length : 0;

  const waiting = o.pieces.filter((p) => p.status === "waiting" && reviewersOf(p, o.people, o.byId).includes(me)).length;
  const returned = o.pieces.filter((p) => p.status === "returned" && o.byId[p.author]?.team_id === me).length;

  if (!ideas.length && !proposals.length && !unconfirmed && !waiting && !returned) return null;
  return { ideas, proposals, unconfirmed, waiting, returned };
}
