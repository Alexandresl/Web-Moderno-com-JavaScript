// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3); // 5

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}
console.log(soma(3, 5)); // 8

// Runção Arrow com retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(10, 4)); // 6