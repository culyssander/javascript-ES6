// function log(value) {
//     console.log(value);
// }

// log('Welcome');

// const log = function(value) {
//     console.log(value);
// }

// log("Welcome to function");

var soma = function(a, b) {
    return a + b;
}

// Arrow function - Sao funcoes anomimas

// var sum = (a, b) =>  a + b;

// var sum10 = a => 10 + a;

// console.log(sum(1,2));

// console.log(sum10(10));

// var createObj = () => ({test: 1234});

// console.log(createObj());

function Car() {
    this.foo = 'bar';
}

console.log(new Car());