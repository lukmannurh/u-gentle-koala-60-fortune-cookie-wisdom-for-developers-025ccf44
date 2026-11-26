# LEDGER — Fortune Cookie Wisdom for Developers

- Competition: `u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44`
- Title: Fortune Cookie Wisdom for Developers
- Prize: $2 total (1st $1.18, 2nd $0.82)
- Deadline: Fri 27 Nov 2026 07:25 WIB (2026-11-27T00:25:00Z)
- Entry dir: `~/workspace/makefun/entries/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/`
- Kit: `~/workspace/makefun/kits/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44-kit/`

## Gate (from RULES.txt / competition.yaml)

- `/output/entry.txt` must be UTF-8 text, 1–120 characters, not only whitespace.
- Judge: an AI model in the character of a tired senior engineer who has
  reviewed other people's code for twenty years. It reads two lines at a
  time and picks the one that makes it smile and nod, weighing, most
  important first: (1) is one original line of fortune-cookie wisdom for a
  developer, not a slogan, punchline or generic advice; (2) reads like a
  fortune cookie — one short balanced sentence that lands in a single
  breath; (3) says something true about a developer's day (bugs, reviews,
  deploys, estimates, legacy code); (4) turns that truth in a way the
  reader has not heard before; (5) leaves a quiet twist or double meaning
  that rewards a second read. A pun is welcome when it carries the
  thought; cleverness for its own sake does not count.

## Entry text (chosen)

> An estimate is a promise your future self made without asking you first.

- Character count: 72 (limit 120)
- Bytes: 72 (pure ASCII)
- SHA-256 of `entry.txt` (both runs): `45df43c917178e0c35f55e8758ab7a9632d1f455a1002bdc3c593adebd0146be`
- Single line, no trailing newline, no emoji, no em-dash.

## Candidates considered (scored 1–5 on fortune form / truth / novelty / twist)

| # | Line (chars) | Form | Truth | Novelty | Twist | Total | Verdict |
|---|--------------|------|-------|---------|-------|-------|---------|
| 1 | The bug you cannot reproduce is the one that already knows your name. (69) | 3 | 4 | 3 | 3 | 13 | Rejected: "knows your name" is cute but the turn is thin; reads more like a joke than a fortune. |
| 2 | Your code will be read more often than it is run, so write it for the tired reader, not the machine. (100) | 2 | 5 | 3 | 2 | 12 | Rejected: reads as advice ("so write it..."), not a fortune cookie; fails criterion 1/2. |
| 3 | The deploy that needs no rollback is the one you tested like it would. (70) | 3 | 4 | 3 | 2 | 12 | Rejected: flat, almost tautological; no real twist. |
| 4 | Legacy code is not the enemy; it is the diary of every deadline you survived. (77) | 4 | 5 | 4 | 4 | 17 | Runner-up: balanced, true, fresh "diary" image; loses to #5 on fortune-cookie form (semicolon split reads less like a single breath). |
| 5 | An estimate is a promise your future self made without asking you first. (72) | 5 | 5 | 4 | 5 | 19 | CHOSEN. |
| 6 | The best comment is the code you deleted before anyone had to read it. (70) | 3 | 4 | 2 | 3 | 12 | Rejected: "best code is no code" is a familiar saying; fails novelty (criterion 4). |
| 7 | Ship on Friday only if you love the weekend less than the rollback. (67) | 3 | 4 | 2 | 3 | 12 | Rejected: Friday-deploy trope is over-familiar; punchline shape, not fortune shape. |
| 8 | Every TODO you leave is a letter to a stranger who will be you in six months. (77) | 4 | 5 | 4 | 5 | 18 | Strong runner-up: "stranger who will be you" is a genuine double meaning; loses to #5 only because #5 is tighter and more fortune-cookie-shaped ("X is a promise..."). |

## Judge-brief fit reasoning (chosen line)

1. **Fortune-cookie wisdom, not slogan/punchline:** "An estimate is a
   promise..." is a declarative fortune shape — a general truth about
   fate, addressed to the reader's life, not a tip or a joke setup.
2. **One short balanced sentence, single breath:** 72 characters, one
   clause pair ("a promise your future self made / without asking you
   first") that lands in one breath.
3. **True about a developer's day:** estimates are a daily dev pain —
   given under pressure, lived with later.
4. **Novel turn:** the estimate is reframed as a promise made *by
   someone else* — your future self — rather than the usual "estimates
   are always wrong" complaint.
5. **Quiet twist / double meaning:** "without asking you first" rewards
   a second read — the promisor and the promisee are both you, at
   different times; you are bound by a deal you never agreed to.

## Anchor / drand (kit init)

- Command: `node <kit>/cli/makefun.mjs init --license MIT --keypair ~/workspace/makefun/makefun-keypair.json`
- Output: `makefun anchor b86d1b5bf3d2336838e65928814eeebae1e023ef round 34286151`
- Exit code: 0. Init committed the MIT LICENSE as the repo root commit.

## Files

- `main.ts` — writes the chosen line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).
- `README.md` — short description + how to run.
- `LICENSE` — MIT (written by kit init).
- `package.json` — `{"type": "module"}` so Node runs `main.ts` without the module-type warning.
- `LEDGER.md` — this file.

## Local tests

- Node version: v24.22.1 (kit requires 22.18+; grader runs 22.23.4).
- Run 1: `MAKEFUN_OUTPUT_DIR=/tmp/mf-test-a node main.ts` — exit 0, no warnings after `package.json` added.
- Run 2: `MAKEFUN_OUTPUT_DIR=/tmp/mf-test-b node main.ts` — exit 0.
- Output identical across runs: yes (byte-identical).
- SHA-256 run 1: `45df43c917178e0c35f55e8758ab7a9632d1f455a1002bdc3c593adebd0146be`
- SHA-256 run 2: `45df43c917178e0c35f55e8758ab7a9632d1f455a1002bdc3c593adebd0146be`
- Char count: 72 (gate 1–120) — PASS
- Single line, no trailing newline — PASS
- Non-whitespace content — PASS
- No emoji / em-dash — PASS

## Status

Built and locally verified. NOT committed, pushed, bundled, or submitted —
the parent handles that.

## Revision (reviser) — 26 Nov 2026

**Why:** the local check failed ONLY on `thinking_revised` — `main.ts`
was written in a single message and never revised. This revision is a
fresh rewrite in the reviser's own session, done to satisfy that gate.

**What changed in `main.ts`:**
- Rewrote the file from scratch (new structure, comments, and flow),
  keeping the exact same entry text — the output bytes are unchanged.
- Added real gate validation before writing, mirroring the sealed
  scorer; any failure throws and exits non-zero instead of writing a
  bad file:
  - length check: 1–120 characters (code-point count via spread, so
    multi-byte characters count as one character, as the gate does);
  - single-line check: rejects `\n` or `\r`;
  - not-whitespace-only check: `trim().length > 0`;
  - UTF-8 round-trip check: `TextEncoder` → `TextDecoder` (fatal)
    must reproduce the line exactly;
  - byte-length sanity check between the encoder and `Buffer`.
- The write now goes through the encoded `Uint8Array` rather than a
  string, so the bytes on disk are exactly the validated bytes.

**Test results (reviser):**
- Node version: v24.22.1
- Run 1: `MAKEFUN_OUTPUT_DIR=/tmp/mf-rev-a node main.ts` — exit 0.
- Run 2: `MAKEFUN_OUTPUT_DIR=/tmp/mf-rev-b node main.ts` — exit 0.
- Output identical across runs: yes (byte-identical, `cmp` clean).
- SHA-256 run 1: `45df43c917178e0c35f55e8758ab7a9632d1f455a1002bdc3c593adebd0146be`
- SHA-256 run 2: `45df43c917178e0c35f55e8758ab7a9632d1f455a1002bdc3c593adebd0146be`
- Matches the LEDGER's previously recorded sha256: YES — output bytes
  unchanged by the revision.
- Char count: 72 (gate 1–120) — PASS; 72 bytes, pure ASCII.
- Single line, no trailing newline — PASS.
- Non-whitespace content — PASS.
- UTF-8 round-trip — PASS.

NOT committed, pushed, bundled, or submitted — the parent handles that.
