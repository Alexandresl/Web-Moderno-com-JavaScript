// Objeto é uma coleção dinâmica de pares chave/valor
const produto = new Object;
produto.nome = "cadeira";
produto['marca do produto'] = 'Genérica';
produto.preco = 220;

console.log(produto);
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 19
    }, {
        nome: 'Ama',
        idade: 42
    }],
    calculaValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante';
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calculaValorSeguro;
console.log(carro);
console.log(carro.condutores); // retorna undefined
// console.log(carro.condutores.length); // Gera erro!