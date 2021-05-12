'use strict'
//1. Use Strict
// added in ES5
// use this for Valina Javascript.
'use strict';

//2.  Variavle
// let (added in ES6)
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);

//var (쓰지마!)
//var hoisting (hoisting: 어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어올려주는 것)
//var는 blockscope이없다 그래서 블록을 철저히 무시한다

// 3. Constant , r(read only)
// 웬만하면 const 로작성!
// 할당하면 값이 절대 바뀌지 않는다

// - 실수를 줄일 수 있다
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable: 값이 변경되지 않는 타입 primitive type, frozen objects
// Mutable : 값이 변경 될 수 있는 타입 all objects by default are mutable in JS
// Immutable의 좋은 점 
// - 보안
// - thread safety 

//4. Variavle type, rw(read/write)
// primitive: 더이상 작은 단위로 나누어 질 수 없는 한가지의 아이템(single item)
// 종류 : number, string, boolean, null, undefined, symbol
// object : single item들을 여러개 묶어서 한단위로 관리할수 있게 해주는 것 box container
// function :  first-class function 변수에 할당이 가능하고, 
// 그렇기 때문에 인자로도 전달되구 리턴타입으로도 function이 리턴된다

//number
const count = 17; //integer
const size = 17.1; //소숫점의 숫자
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
// 모든 문자는 string 타입이다
const brendan = 'brendan';
const greeting = 'hello';
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (stinrg)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, Nan, ''
// true : any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol : map이나 자료구조에서 고유한 식별자가 필요하거나, 
//동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고싶을때 쓰여지는 것
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

//동일한 symbol을 만들고 싶을때
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
//symbol은 뒤에 description 을 붙여 스트링으로 변환하여 출력해야함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//5. Dynamic typing: dynamically typed language
//runtime에서 타입이 정해진다 이것때문에 timescirpt가 생겨남!
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));