const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const quarters = 0.25
const dimes = 0.10
const nickels = 0.05
const pennies = 0.01

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
    console.log("\nInvalid.")

} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.")

} else { (amount % quarters > MIN || amount/quarters < MAX)
        qvalue = amount % quarters

    console.log("\n" + qvalue + " quarters, dimes, nickels, pennies.")

}
