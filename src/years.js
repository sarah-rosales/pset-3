const readlineSync = require("readline-sync");

const year = Number(readlineSync.question("\nEnter a year: "));

const MAX = Number.MAX_SAFE_INTEGER

if (Number.isNaN(year)) {
  console.log("\nInvalid.");
} else if (!Number.isInteger(year)) {
  console.log("\nInvalid.");
} else if (year < 0 || year > MAX) {
  console.log("\nInvalid.");
} else if (year % 400 == 0) {
  console.log("\n" + year + " is a leap year.");
} else if (year % 100 == 0) {
  console.log("\n" + year + " is not a leap year.");
} else if (year % 4 == 0) {
  console.log("\n" + year + " is a leap year.");
} else {
  console.log("\n" + year + " is not leap year.");
}
