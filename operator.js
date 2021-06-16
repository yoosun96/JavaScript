// 1. String concatenation 문자연산
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log('ellis\'s book');

//2. Numeric operators 산술연산
console.log(1 + 1); // 더하기
console.log(1 - 1); // 뺴기
console.log(1 / 1); // 나누기
console.log(1 * 1); // 곱하기
console.log(5 % 2); // 나머지값구하기
console.log(2 ** 3); //배수?몇승몇승하는거..

// 3. Increment and decrement operators 증감연산(++,--)
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;  연산먼저
// preIncrement = counter;  그다음 할당
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter; 할당먼저
// counter = counter + 1; 그다음 연산
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

//4. Assignment operators 할당 연산자
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

// 5. Comparison operators 비교 연산자
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: || (or), && (and), !(not)
const value1 = true;
const value2 = 4 < 2;

// || or true을 찾으면 바로 true다!
// 함수나 복잡한거는 마지막에 호출
console.log(`or ${value1 || value2 || check()}`);

// && and 
console.log(`and ${value1 && value2 && check()}`);
// null 체크도된다 

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('OMG!');
    }
    return this;
}

// ! (not)
console.log(!value1);

// 7. Equlity
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion 타입이 변경되서 비교함
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion 타입까지 비교함 //추천
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //각각 다른 reference 가 담겨있음
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// 8. Conditional operatios: if 조건 연산자
// if, else if, else
const name = 'coder';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amaing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator : ?  삼항조건연산자
// condition ? value1 :  value2; 
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Fire fox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops 반복문
// while loop, while the condition is truthy,
// body code is executed.
// 조건문이 맞을때만 실행하고싶으면 while
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,
// then check the codition.
// 실행먼저하고 싶으면 do while
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (let i = 3; i > 0; i--) {
    console.log(`for: ${i}`)
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variavle dexlearation
    console.log(`inline variavle for: ${i}`);
}

//nested loops 중첩 반복문
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break 멈춰버리는것
// continue 지금껏만 멈추고 다음으로 이어지게

for (let i = 0; i < 11; i++) {
    if (i % 2 !== 0) {
        continue;
    } else {
        console.log(`cotinue: ${i}`);
    }
}

for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`break: ${i}`);
}
