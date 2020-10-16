const prompt = require('prompt-sync')();
let n = prompt('Enter the number of terms: ');
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');


function fib(n) {
    if (n === 0)
        return 0;
    else {
        if (n === 1 || n === 2)
            return 1;
        else {
            return fib(n - 1) + fib(n - 2);
        }
    }

};
for (let i = 0; i < n; i++) {
    console.log(fib(i));
}