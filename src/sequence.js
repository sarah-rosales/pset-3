const readlineSync = require("readline-sync");

const first_number = Number(readlineSync.question("\nEnter three numbers.\n"));
const second_number = Number(readlineSync.question(""));
const third_number = Number(readlineSync.question(""));

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

if (Number.isNaN(first_number)) {
  console.log("\nInvalid.")
} else if (first_number < MIN || first_number > MAX) {
  console.log("\nInvalid.")
}
if (Number.isNaN(second_number)) {
  console.log("\nInvalid.")
} else if (second_number < MIN || second_number > MAX) {
  console.log("\nInvalid.")
}
if (Number.isNaN(third_number)) {
  console.log("\nInvalid.")
} else if (third_number < MIN || third_number > MAX) {
  console.log("\nInvalid.")
}

if (first_number < second_number && second_number < third_number) {
  console.log("\nStrictly increasing.");
} else if (first_number == second_number && second_number < third_number) {
  console.log("\nIncreasing.");
} else if (first_number < second_number && second_number == third_number) {
  console.log("\nIncreasing.");
} else if (first_number == second_number && second_number == third_number) {
  console.log("\nEqual.")
} else if (first_number == second_number && second_number > third_number) {
  console.log("\nDecreasing.");
} else if (first_number > second_number && second_number == third_number) {
  console.log("\nDecreasing.");
} else if (first_number > second_number && second_number > third_number) {
  console.log("\nStrictly decreasing.");
} else {
  console.log("\nUnordered.");
}
