
// const s = Symbol('hello');
// const s1 = Symbol('hello');

// console.log(s === s1);

// const arr  = [1,2,3,4];

// const arr1 = arr[Symbol.iterator]();

// console.log(arr1.next());


// Generators
function hello() {
    console.log('Hello');
    yield 1;

    console.log('from');
    yield 3;

    console.log('Function');
}

const metodo = hello();

console.log(metodo.next());