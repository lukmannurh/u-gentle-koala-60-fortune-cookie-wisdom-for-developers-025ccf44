// Fortune Cookie Wisdom for Developers
//
// Writes one original fortune-cookie line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
//
// The line is validated against the competition gate before it is
// written, so a bad line fails loudly here instead of silently
// failing the sealed scorer on the server:
//   - UTF-8 text, 1 to 120 characters
//   - not only whitespace
//   - a single line (no newline or carriage return)
// The byte output is exactly the chosen line, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 120;

const LINE =
  "An estimate is a promise your future self made without asking you first.";

// --- Gate validation (mirrors the sealed scorer) -------------------------

function fail(message: string): never {
  throw new Error(`gate check failed: ${message}`);
}

// Length: the gate counts characters, 1 to 120.
const length = [...LINE].length;
if (length < 1 || length > MAX_CHARS) {
  fail(`length ${length} chars is outside the 1-${MAX_CHARS} range`);
}

// Single line: the entry must be one line, so no line breaks at all.
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("entry contains a line break; it must be a single line");
}

// Not whitespace-only: at least one non-whitespace character.
if (LINE.trim().length === 0) {
  fail("entry is only whitespace");
}

// UTF-8 round-trip: encoding then decoding must give the same text,
// otherwise the written bytes would not decode back to this line.
const encoded = new TextEncoder().encode(LINE);
const roundTripped = new TextDecoder("utf-8", { fatal: true }).decode(encoded);
if (roundTripped !== LINE) {
  fail("UTF-8 round-trip changed the entry text");
}

// Sanity: the bytes we are about to write are exactly the line, so the
// scorer sees the same 72 characters the ledger records.
if (encoded.length !== Buffer.byteLength(LINE, "utf8")) {
  fail("byte length mismatch between encoder and Buffer");
}

// --- Write ----------------------------------------------------------------

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), encoded);
