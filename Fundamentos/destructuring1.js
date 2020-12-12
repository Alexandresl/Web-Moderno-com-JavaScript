const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade); // Ana 5

const { nome: n, idade: i } = pessoa;
console.log(n, i); // Ana 5

const { sobrenome, bemHumorada  = true} = pessoa;
console.log(sobrenome, bemHumorada); // undefined true

const { endereço: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep); // Rua ABC 1000 undefined