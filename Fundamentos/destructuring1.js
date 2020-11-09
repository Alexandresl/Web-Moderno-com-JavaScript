const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Extraí do objeto pessoa seu nome e idade e armazena nas respectivas variáveis
const { nome, idade } = pessoa;
console.log(nome, idade);

// É possível determinar o identificador da variável
const { nome: n, idade: i } = pessoa;
console.log(n, i);

// Tentando acessar atributos que não existem no objeto
const { sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);

// Acessando os dados do endereço
const { endereco: { logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep);