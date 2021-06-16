'use strict';
// Object-oriendted programming
// class: template 틀,청사진
// object: instance of a class
// JavaScript classes
//  - introduced in ES6 이전에는 바로 object를 만들었다
//  - syntactical sugar over prototype-based inheritance\

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age) { //생성자
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    spaek() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.spaek();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
    publicField = 2;
    #privateField = 0; //앞의 #을 붙이는것
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Deram Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


// 5. Inheritance 상속
// a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}
class Rectangle extends Shape { }
class Triangle extends Shape {
    draw() {
        super.draw();//부모의 draw호출
        console.log('🔺');
    }
    getArea() { //오버라이딩 필요한 함수만 재정의해서 사용하는 것
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}


const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());