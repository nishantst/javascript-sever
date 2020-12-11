const prompt = require('prompt-sync')();
let n = prompt('Enter a positive integer: ');

function fact(n) {
    if (n === 1)
        return 1;
    else {
        return n * fact(n - 1);
    }
}
console.log(`The factorial of ${n} is ${fact(n)}.`);
