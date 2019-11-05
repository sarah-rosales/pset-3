const readlineSync = require("readline-sync");

const grade = Number(readlineSync.question("\nEnter a grade: "));

const grade_a1 = 100
const grade_a2 = 90
const grade_b1 = 89
const grade_b2 = 80
const grade_c1 = 79
const grade_c2 = 70
const grade_d1 = 69
const grade_d2 = 60
const grade_f1 = 59
const grade_f2 = 0

if (grade <= grade_a1 && grade >= grade_a2 ) {
  console.log("\nYou received an A.");
} else if (grade <= grade_b1 && grade >= grade_b2 ){
  console.log("\nYou received an B.");
} else if (grade <= grade_c1 && grade >= grade_c2 ){
  console.log("\nYou received an C.");
} else if (grade <= grade_d1 && grade >= grade_d2 ){
  console.log("\nYou received an D.");
} else if (grade <= grade_f1 && grade >= grade_f2 ){
  console.log("\nYou received an F.");
} else {
  console.log("\nInvalid.");
}
