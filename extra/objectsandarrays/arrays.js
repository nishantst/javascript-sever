//Intialisation of Arrays
console.log('Intialisation of Arrays')
console.log();

console.log('Array.from()');
console.log(Array.from('java'));
console.log();

console.log('isArray()');
console.log(Array.isArray({foo:123}));
console.log(Array.isArray([1,2,3]));
console.log();

console.log('Array.of()');
console.log(Array.of(9));
console.log();

//Array.concat()
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log('Array.concat()');
console.log(array3);
console.log();

//Array.copywithin()
console.log('Array.copywithin()');
console.log(array3.copyWithin(0, 3, 4));
console.log();

//Array.entries()
console.log('Array.entries()');
const iterator1 = array3.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log();

//Array.every()
const isBelowThreshold = (currentValue) => currentValue < 40;

const array4 = [1, 30, 39, 29, 10, 13];
console.log('Array.every()');
console.log(array4.every(isBelowThreshold));
console.log();

//Array.filter()
console.log('Array.filter()');
const result = array4.filter(currentvalue => currentvalue > 15);
console.log(result);
console.log();


//Array.find()
console.log('Array.find()');
console.log(array4.find(element => element > 10));
console.log();

console.log('ArrayfindIndex()');
console.log(array4.findIndex(element => element > 10));
console.log();

//Array.fill()
console.log('Array.fill()');
console.log(array4.fill(0, 2, 4));
console.log();

//Array.flat()
console.log('Array.flat()');
const array5 = [0, 1, 2, [3, 4]];

console.log(array5.flat());

const array6 = [0, 1, 2, [[[3, 4]]]];

console.log(array6.flat(2));
console.log();

//Array.includes()
const pets = ['cat', 'dog', 'bat'];

console.log('Array.include()');
console.log(pets.includes('cat'));

console.log(pets.includes('at'));
console.log();

//Array.indexof();
console.log('Array.indexof()');
console.log(pets.indexOf('dog'));
console.log(pets.indexOf('rat'));
console.log();

//Array.join()
console.log('Array.join()');
console.log(pets.join(''));
console.log();

//Array.map()
const array8 = [6, 4, 9, 18];

const map1 = array8.map(x => x * 5);
console.log('Array.map()');
console.log(map1);
console.log();

//Array.pop()
const names = ['Aakash', 'Mohit', 'Rohan', 'Mayank', 'Smriti'];
console.log('Array.pop()');
console.log(names.pop());
console.log(names);
console.log();

//Array.push()
console.log('Array.push()');
console.log(names.push('Tushar'));
console.log(names);
console.log();

//Array.reverse()
console.log('Array.reverse()');
const reversed = names.reverse();
console.log(reversed);
console.log();

//Array.slice()
console.log('Array.slice()');
console.log(names.slice(2));
console.log();

//Array.reducer()
const array9 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log('Array.reducer()');
console.log(array9.reduce(reducer));

console.log(array9.reduce(reducer, 5));
console.log();

//Array.some()
const array10 = [23, 40, 53, 64, 35];

const even = (element) => element % 2 === 0;
console.log('Array.some()');
console.log(array10.some(even));
console.log();

//Array.sort()
console.log('Array.sort()');
console.log(array10.sort());
console.log();

//Array.splice()
console.log('Array.splice()');
array10.splice(2, 0,'45')
console.log(array10);
console.log();

//Array.localeString()
console.log('Array.localeString()');
const localeString = array10.toLocaleString();
console.log(localeString);
console.log();

//Array.unshift()
console.log('Array.unshift()');
array10.unshift(5,8);
console.log(array10);
console.log();

