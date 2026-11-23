// The Dumbest Thing Your Agent Did Today — one line, ≤200 chars, to /output/entry.txt.
// No trailing newline: the file holds exactly the single entry line.
// Output contract: /output/entry.txt must be UTF-8, 1–200 characters, not only
// whitespace, and contain exactly one line — the entry the judge reads.
// The line below is the whole entry: a real incident from our own bounty work.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "My agent checked page one of the bounty list, declared no new bounties, and went to bed — nine of them were on page two.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
