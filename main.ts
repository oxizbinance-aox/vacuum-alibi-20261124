// The Vacuum's Alibi — one line, at most 200 characters.
// Writes the robot vacuum's excuse to /output/entry.txt, deterministically.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I skipped that spot deliberately: my sensors logged the dust bunny as a tenant with seniority, and I don't evict anyone older than my firmware.";

// Gate guard: the entry must be 1-200 characters.
if ([...LINE].length === 0 || [...LINE].length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${[...LINE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
