console.log('Intialising of objects');

//object.assign()
const target = { a: 5, b: 6 };
const source = { b: 7, c: 8 };

const returnedTarget = Object.assign(target, source);
console.log('Object.assign()');
console.log(target);

console.log(returnedTarget);
console.log();

//object.create()
console.log('Object.create()');
const student = {
    isstudent: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I student? ${this.isHuman}`);
    }
};

const me = Object.create(student);

me.name = 'John';
me.isHuman = true;

me.printIntroduction();
console.log();

//object.defineProperties()
console.log('Object.defineproperties()');
const object1 = {};

Object.defineProperties(object1, {
    property1: {
        value: 58,
        writable: false

    },
    property2: {}
});
object1.property1 = 77;
console.log(object1.property1);
console.log();

// object.entries()
const object2 = {
    a: 'javascript',
    b: 35
};
console.log('Object.entries()');
for (const [key, value] of Object.entries(object2)) {
    console.log(`${key}: ${value}`);
}
console.log();

// object.fromentries()
const entries = new Map([
    ['abs', 'xyz'],
    ['baz', 42]
]);
console.log('Object.fromEntries()');
const obj = Object.fromEntries(entries);

console.log(obj);
console.log();

// object.getOwnPropertyDescriptor()
const object3 = {
    prop: 78

};
console.log('Object.getOwnPropertyDescriptor');
const descriptor1 = Object.getOwnPropertyDescriptor(object3, 'prop');

console.log(descriptor1.configurable);

console.log(descriptor1.value);
console.log();

//object.getownpropertynames()
const object4 = {
    x: 4,
    y: 6,
    z: 8
};
console.log('Object.getOwnPropertyNames');
console.log(Object.getOwnPropertyNames(object4));
console.log();

//object.is()
const object5 = {
    a: 4,
    b: 6
};

console.log('Object.is()');
console.log(Object.is(object5));
console.log();

//object.isExtensible()
const object6 = {};
console.log('Object.isExtensible()');
console.log(Object.isExtensible(object6));
console.log();

//object.preventExtension()
console.log('Object.preventExtension()');
Object.preventExtensions(object6);

console.log(Object.isExtensible(object6));
console.log();

//object.isFrozen()
const object7 = {
    property1: 24
};
Object.freeze(object7);
console.log('Object.isFrozen()');
console.log(Object.isFrozen(object7));
console.log();


//object.isSeal()
const object8 = {
    prop: 42
};
console.log('Object.isSeal()');
Object.seal(object8);
console.log(Object.isSealed(object8));
console.log();


//object.keys()
const object9 = {
    a: 'javascript',
    b: 55,
    c: true
};
console.log('Object.keys()');
console.log(Object.keys(object9));
console.log();

//object.values()
console.log('Object.values()');
console.log(Object.values(object9));
console.log();




