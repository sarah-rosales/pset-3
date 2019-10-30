const readlineSync = require("readline-sync");

let number = Number(readlineSync.question("\nEnter a number: "));

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

if (number >= MIN && number < 0) {
  console.log("\nNegative.");
}
else if (number <= MIN) {
  console.log("\nInvalid.")
}

if (number <= MAX && number > 0 ) {
  console.log("\nPositive.");
}
else if (number >= MAX) {
  console.log("\nInvalid.")
}
if (number == 0) {
  console.log("\nZero.");
}
