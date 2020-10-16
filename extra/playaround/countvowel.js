function countVowel(str) {

    let count = str.match(/[aeiou]/gi).length;

    return count;
}

const prompt = require('prompt-sync')();
let string = prompt('Enter a string: ');

let result = countVowel(string);

console.log(result);