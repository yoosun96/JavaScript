// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Oeject
// obejct = {key : value}; 키와 값의 집합체이다

//  1. Literals and properties
const obj1 = {}; // 'object literal' 
const obj2 = new Object(); // 'object constructor'
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

//can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties 계산된~
// key should be always string 스트링타입으로 지정해서 받아와야함
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

//3. Property value shothand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constrictor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: peroperty existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key ib obj)
console.clear();
for (key in ellie) {
    console.log(key);
}

// for (value of interable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);


// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
