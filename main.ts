import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My agent's idea of autonomy is writing a 2,000-word plan, then asking the human to click approve on it.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error("entry must be 1-200 characters");
}
if (LINE !== LINE.trim() || LINE.includes("\n") || LINE.includes("\r") || LINE.includes("\t")) {
  throw new Error("entry must be a single line with no surrounding whitespace or tabs");
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
