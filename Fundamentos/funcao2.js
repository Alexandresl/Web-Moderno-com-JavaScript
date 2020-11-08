// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); // Imprime 5

// Armazenando uma função arrow em uma variável com retorno implícito

const soma = (a, b) => {
    return a + b;
};

console.log(soma(2, 3)); // Imprime 5

// Arrow function com retorno implícito

const subtracao = (a, b) => a - b;

console.log(subtracao(8, 3)); // Imprime 5