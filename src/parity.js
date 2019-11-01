const readlineSync = require("readline-sync");

let integer = Number(readlineSync.question("\nEnter a integer: "));

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER
const EVEN = (integer % 2 === 0)

if (Number.isNaN(integer)) {
  console.log("\nInvalid.")
} else if (!Number.isInteger(integer)) {
  console.log("\nInvalid.");
} else if (integer < MIN || integer > MAX) {
  console.log("\nInvalid.")
} else {
  if (integer % 2 === 0) {
    console.log("\nEven.");
} else {
    console.log("\nOdd."); }
}
