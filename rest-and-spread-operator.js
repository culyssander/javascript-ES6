// function sum(a, b) {
//     let value = 0;

//     for(let i=0; i<arguments.length; i++) {
//         value +=arguments[i];
//     }

//     return value;
// }

// console.log(sum(1, 3, 4, 5));

//ES6 - rest operator (...)

// var sum = (...args) => {
//     console.log(args);
//     return args.reduce((a, b) => a + b, 0);
// };

// var sum = (a, b, ...args) => {
//     console.log(a, b, args);
// }

const multiply = (...args) => args.reduce((a, value) => a * value, 1);

//Spread operator

// const sum = (...rest) => {
//     // return multiply.apply(undefined, rest); e o mesmo que debaixo mas usa o spread operator
//     return multiply(...rest);
// }

// console.log(sum(1, 2, 3, 4, 5));
// console.log(multiply(1, 2, 3, 4, 5));


var text = "Ola, Bem-vindo ao Javascript";

var spread = (...args) => {
    console.log(args);
}

spread(...text);

