const readlineSync = require("readline-sync");

const card = (readlineSync.question("\nEnter a playing card: "));

let c = "Clubs.";
let d = "Diamonds.";
let h = "Hearts.";
let s = "Spades.";

let ace = card.charAt(0);
console.log();

// if (card == "AC") {
//   console.log("\nAce of Clubs.");
// } else if (card == "2C") {
//   console.log("\nTwo of Clubs.");
// } else if (card == "3C") {
//   console.log("\nThree of Clubs.");
// } else if (card == "4C") {
//   console.log("\nFour of Clubs.");
// } else if (card == "5C") {
//   console.log("\nFive of Clubs.");
// } else if (card == "6C") {
//   console.log("\nSix of Clubs.");
// } else if (card == "7C") {
//   console.log("\nSeven of Clubs.");
// } else if (card == "8C") {
//   console.log("\nEight of Clubs.");
// } else if (card == "9C") {
//   console.log("\nNine of Clubs.");
// } else if (card == "10C") {
//   console.log("\nTen of Clubs.");
// } else if (card == "JC") {
//   console.log("\nJack of Clubs.");
// } else if (card == "QC") {
//   console.log("\nQueen of Clubs.");
// } else if (card == "KC") {
//   console.log("\nKing of Clubs.");
// } else {
//   console.log("\nInvalid.");
// }
