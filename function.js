// function declaration
// function hello(fName, 1Name) {
// return 'hello ${fName} ${1Name}';
// }
// console.log(hello('Edgard', 'Supit'));


// function expression
let greeting = function(name) {
    return 'hello ${name}';
}
// console.log(greeting('Edgard'));

const fct = function factorial(number) {
    if(number <=1 ) {
        return 1;
    } else {
        return number * factorial(number -1);
    }
}
// console.log(fct(3));


// IIFE
const squared = (function(num) {
    return num * num;
})(8);
// console.log(squared);


// arrow function
const hello2 = (fName, 1Name) => {
    console.log('welcome');
    return 'hello ${fName} ${1Name}';
}
console.log(hello2('Edgard', 'Supit'));

const hello = (name) => {
    return 'hello ${name}';
};

console.log(hello('Edgard'));


const fct2 = (number) => {
    if(number <=1) {
        return 1;
    } else {
        return number * fct2(number -1);
    }
}
console.log(fct2(9));