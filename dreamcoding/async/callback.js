'use strict';



// Sychronous callback
function printImmediately(print) {
    print();
}


// Asychronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}


// JavaScript is sychronous
// Execute the code block in order after hoisting 
//호이스팅이 된 이후부터 코드가 우리가 작성한 순서에 맞춰서 하나씩 동기적으로 실행된다
// hoisting: var, function declration 
// var 변수와 함수선언들이 자동적으로 제일위로 올라가는 것

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');
printImmediately(() => console.log('hello '));

printWithDelay(() => console.log('async callback'), 2000);


// Callback hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'))
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);