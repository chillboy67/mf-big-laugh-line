import { mkdirSync, writeFileSync } from 'node:fs';
// The entry is one fixed line: the grader reads it from /output/entry.txt.
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "My password is so secure that even I cannot log in. The reset email just says nice try, and my account now has a restraining order against me.");
