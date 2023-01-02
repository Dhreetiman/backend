// problem 5
// Find sum and multiplication of all natural numbers from 10 to 20

let sum = 0;
let multi = 1;
for (let i = 10; i <= 20; i++) {
  sum = sum + i;
  multi = multi * i;
}

console.log(`Sum of The Natural number from 10 to 20 is ${sum}`);
console.log(`Multiplication of The Natural number from 10 to 20 is ${multi}`);