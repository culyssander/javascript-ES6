const fetch = require('node-fetch');

var url = 'https://endereco-api.herokuapp.com/api/v1/paises';

// fetch(url).then( data =>
//     data.json().then(data1 =>  {
//         for(let i=0; i<data1.length; i++) {
//             const {id, nome, capitalNome, fusoHorario} = data1[i];
//             console.log(nome + " - " + capitalNome);
//         }
//     }
// ));

const test = async () => {
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);
};

test();