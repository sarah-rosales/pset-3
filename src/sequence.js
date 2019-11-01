const readlineSync = require("readline-sync");

const first_number = Number(readlineSync.question("\nEnter three numbers.\n"));
const second_number = Number(readlineSync.question(""));
const third_number = Number(readlineSync.question(""));

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

if (first_number < second_number || second_number < third_number) {
  console.log("\nStrictly increasing.");
// } else {
//   console.log("\nInvalid.");
// }
