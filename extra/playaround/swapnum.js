const prompt = require('prompt-sync')();
let a = prompt('Enter the first variable: ');
let b = prompt('Enter the second variable: ');

//swap variables
a=parseInt(a)+parseInt(b);
b = a-b;
a = a-b;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

