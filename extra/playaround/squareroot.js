const prompt = require('prompt-sync')();
let number = prompt('Enter the number: ');

let result = Math.sqrt(number);
console.log("The square root of", number, "is", result);