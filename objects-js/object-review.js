// coleção dinâmica de pares chave/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Genérica';
produto.preco = 220;

console.log(produto); // { nome: 'Cadeira', 'marca do produto': 'Genérica', preco: 220 }
delete produto.preco;
delete produto['marca do produto'];
console.log(produto); // { nome: 'Cadeira' }

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123,
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19,
    }, {
        nome: 'Ana',
        idade: 42,
    }],
    calcularValorSeguro: function() {
        // ...
    },
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av DEF';
console.log(carro);
/*
{
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: { logradouro: 'Av DEF', numero: 1000 }
    },
    condutores: [ { nome: 'Junior', idade: 19 }, { nome: 'Ana', idade: 42 } ],
    calcularValorSeguro: [Function: calcularValorSeguro]
}
*/

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);
/*
{
    modelo: 'A4',
    valor: 89000,
    proprietario: { nome: 'Raul', idade: 56 }
}
*/
console.log(carro.condutores); // undefined
// console.log(carro.condutores.length); // TypeError: Cannot read property 'length' of undefined
