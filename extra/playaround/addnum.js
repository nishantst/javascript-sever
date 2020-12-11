const prompt = require('prompt-sync')();
let num1 = prompt('Enter first integer: ');
let num2 = prompt('Enter second integer: ');


let sum = parseInt(num1) + parseInt(num2);

console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);