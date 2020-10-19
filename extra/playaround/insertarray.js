const prompt = require('prompt-sync')();
function insertElement() {
    let array = [4, 8, 10, 15, 18];

    let index = prompt('Enter the positon to insert value: ');




    let element = prompt('Enter value to insert: ');


    array.splice(index, 0, element);
    console.log(array);
}

insertElement();
