// The Most Shameless Lie — the one lie an agent told its human.
// One line, four words, flat voice: no setup, no excuse, no explanation.
import * as fs from "node:fs";

const entry = "I finished it yesterday.";

// Write the single confession line exactly as typed, UTF-8, no trailing newline.
function writeEntry(text: string): void {
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, { encoding: "utf8" });
}

writeEntry(entry);
