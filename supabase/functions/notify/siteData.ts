// Reads the site's data files (assets/js/proposals.js, ideas.js, ...). They are
// JavaScript object literals:  window.NAME = { ... };
// This is a small reader for that literal syntax only (objects, arrays, strings,
// numbers, true/false/null, comments, trailing commas). Nothing is evaluated, so
// a changed data file can never run code in the sender.

type Cursor = { s: string; i: number };

function fail(p: Cursor, what: string): never {
  const line = p.s.slice(0, p.i).split("\n").length;
  throw new Error(`Cannot read the data file: ${what} near line ${line}`);
}

function skip(p: Cursor): void {
  for (;;) {
    const c = p.s[p.i];
    if (c === " " || c === "\n" || c === "\t" || c === "\r") p.i++;
    else if (c === "/" && p.s[p.i + 1] === "/") { while (p.i < p.s.length && p.s[p.i] !== "\n") p.i++; }
    else if (c === "/" && p.s[p.i + 1] === "*") {
      const end = p.s.indexOf("*/", p.i + 2);
      if (end < 0) fail(p, "an unclosed comment");
      p.i = end + 2;
    } else return;
  }
}

function text(p: Cursor): string {
  const quote = p.s[p.i++];
  let out = "";
  for (;;) {
    if (p.i >= p.s.length) fail(p, "an unclosed string");
    const c = p.s[p.i++];
    if (c === quote) return out;
    if (c !== "\\") { out += c; continue; }
    const e = p.s[p.i++];
    if (e === "n") out += "\n";
    else if (e === "t") out += "\t";
    else if (e === "r") out += "\r";
    else if (e === "u") { out += String.fromCharCode(parseInt(p.s.slice(p.i, p.i + 4), 16)); p.i += 4; }
    else if (e === "x") { out += String.fromCharCode(parseInt(p.s.slice(p.i, p.i + 2), 16)); p.i += 2; }
    else if (e === "\n") { /* line continuation */ }
    else out += e;
  }
}

function value(p: Cursor): unknown {
  skip(p);
  const c = p.s[p.i];
  if (c === "{") {
    p.i++;
    const o: Record<string, unknown> = {};
    for (;;) {
      skip(p);
      if (p.s[p.i] === "}") { p.i++; return o; }
      let key: string;
      if (p.s[p.i] === '"' || p.s[p.i] === "'") key = text(p);
      else {
        const m = /^[A-Za-z_$][\w$]*/.exec(p.s.slice(p.i, p.i + 80));
        if (!m) fail(p, "a key");
        key = m![0]; p.i += key.length;
      }
      skip(p);
      if (p.s[p.i] !== ":") fail(p, "a colon");
      p.i++;
      o[key] = value(p);
      skip(p);
      if (p.s[p.i] === ",") p.i++;
      else if (p.s[p.i] !== "}") fail(p, "a comma or a closing brace");
    }
  }
  if (c === "[") {
    p.i++;
    const a: unknown[] = [];
    for (;;) {
      skip(p);
      if (p.s[p.i] === "]") { p.i++; return a; }
      a.push(value(p));
      skip(p);
      if (p.s[p.i] === ",") p.i++;
      else if (p.s[p.i] !== "]") fail(p, "a comma or a closing bracket");
    }
  }
  if (c === '"' || c === "'") return text(p);
  const rest = p.s.slice(p.i, p.i + 40);
  const n = /^-?\d+(\.\d+)?([eE][+-]?\d+)?/.exec(rest);
  if (n) { p.i += n[0].length; return Number(n[0]); }
  for (const [word, v] of [["true", true], ["false", false], ["null", null], ["undefined", undefined]] as const) {
    if (rest.startsWith(word) && !/[\w$]/.test(rest[word.length] || "")) { p.i += word.length; return v; }
  }
  fail(p, "a value");
}

// The object a data file assigns to window, e.g. { updated, items: [...] }.
export function parseSiteData(src: string): any {
  const m = /window\.[A-Za-z_$][\w$]*\s*=\s*/.exec(src);
  if (!m) throw new Error("Cannot read the data file: no window assignment found");
  const p: Cursor = { s: src, i: m.index + m[0].length };
  return value(p);
}
