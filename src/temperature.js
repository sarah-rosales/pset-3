const readlineSync = require("readline-sync");

const temp = Number(readlineSync.question("\nEnter a temperature: "));
const scale = (readlineSync.question("Enter a scale: "));

const MIN = Number.MIN_SAFE_INTEGER
const MAX = Number.MAX_SAFE_INTEGER

const f_freezing = 32
const f_boiling = 212

const c_freezing = 0
const c_boiling = 100

const k_freezing = 273.15
const k_boiling = 373.15

if (Number.isNaN(temp)) {
  console.log("\nInvalid.");
} else if (Number.isInteger(scale)) {
  console.log("\nInvalid.");
} else if (temp < MIN || temp > MAX) {
  console.log("\nInvalid.");
} else {
  if (scale == "F" && temp <= f_freezing) {
    console.log("\nSolid.");
  } else if (scale == "F" && temp > f_freezing && temp < f_boiling) {
    console.log("\nLiquid.");
  } else if (scale == "F" && temp >= f_boiling) {
    console.log("\nGas.");
  } else if(scale == "C" && temp <= c_freezing) {
    console.log("\nSolid.");
  } else if (scale == "C" && temp > c_freezing && temp < c_boiling) {
    console.log("\nLiquid.");
  } else if (scale == "C" && temp >= c_boiling) {
    console.log("\nGas.");
  } else if (scale == "K" && temp <= k_freezing) {
    console.log("\nSolid.");
  } else if (scale == "K" && temp > k_freezing && temp < k_boiling) {
    console.log("\nLiquid.");
  } else if (scale == "K" && temp >= k_boiling) {
    console.log("\nGas.");
  } else {
    console.log("\nInvalid.");
  }
}
