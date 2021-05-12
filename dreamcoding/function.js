// Function
// 프로그램을 구성하는 fundamental building block
// 서브프로그램이라고도 불리며 여러번 재사용이 가능하다는 장점이 있다
// 대체적으로 한가지의 task나 값을 계산하기위해 쓰이고있다.

// 1. Function 
// funcion name (param1. param2) { body... return; }
// 하나의 함수는 한가지의 일만하도록 만들어야한다
// naming: doSomething, command, verb(동사형태)
// JS : function is object
function printHello() {
    console.log('Hello');
}
printHello();

function log(meesage) {
    console.log(meesage);
}
log('Hello!');
log(1234);

// 2. Parameters
// primitive type : 메모리에 value가 저장되어있어 그대로 value 가 전달된다
// object : 메모리에 reference가저장되어 reference가 전달된다
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie ' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added on ES6)
function showMessage(message, from = "unknown") {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
// ... > Rest param 배열형태로 전달된다
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) { //간단하게 출력하는 법 a of b
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));//더간단하게
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // globla variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local scope (지역변수)블록안에서만 접근가능
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    //console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad 블록안에서 로직을 많이 작성하면 가독성이 떨어진다
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}
// good 조건이 맞지 않는 경우 빨리 return 하여 종료하는 것이 좋다
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// 1. Function expression 함수표현식
// 함수선언(function declration)은 정의된 것 보다 일찍 호출될 수 있다 (hoisting 가능)
// 함수 표현식(function expression)은 변수에 할당된 다음에 호출이 가능하다

const print = function () { //선언과동시에 변수에 할당가능 //anonymous function 익명함수
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression 콜백함수
function readomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
}
// named function
// 디버깅을 할때 함수의 이름이 나오게 하기위해서
// 함수안에서 재귀호출을 위해서 필요할때만!
const printNo = function print() {
    console.log('no!');
}

readomQuiz('wrong', printYes, printNo);
readomQuiz('love you', printYes, printNo);

// Arrow function 화살표함수
// always amonymous
const simplePrint = function () {
    console.log('simplePrint!');
};
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {//블록을 쓴다면 return 키워드가 들어가야함
    // do something more
    return a * b;
};

// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();
``