const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const quarters = 0.25
const dimes = 0.10
const nickels = 0.05
const pennies = 0.01

let qvalue = 0
let dvalue = 0
let nvalue = 0
let pvalue = 0

let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
  console.log("\nInvalid.")
} else if (amount < MIN || amount > MAX) {
  console.log("\nInvalid.")
} else {
  while (amount > quarters) {
    amount = amount - quarters;
    qvalue++;
  }

  while (amount > dimes) {
    amount = amount - dimes;
    dvalue++;
  }

  while (amount > nickels) {
    amount = amount - nickels;
    nvalue++;
  }

  while (amount > 0) {
    amount = amount - pennies;
    pvalue++;
  }

  console.log("\n" + qvalue + " quarters, " + dvalue + " dimes, "+ nvalue +" nickels, and " + pvalue + " pennies.")
}
