// var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

// var apple = arr[0];
// var banana = arr[1];
// var orange = arr[2];
// var tomato = arr[3][0];

// Destructuring assigment

// var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

// console.log(apple, apple2);
// console.log(tomato, tomato2);

user = {
    nome: "Quitumba",
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
}

var nome1 = user.nome;
var age1 = user.props.age;

// Destructuring

var {nome, props: {age, favoriteColors: [color1, color2]}} = user;
// var {nome, props: {age, favoriteColors}} = user;
// var {nome: nome2} = user;

// console.log(nome1, nome, nome2);
console.log(nome, age, color1, color2);
// console.log(nome, age, favoriteColors);