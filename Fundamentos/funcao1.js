// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); // Imprime 5
imprimirSoma(2); // Imprime NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8); // Imprime 12
imprimirSoma(); // Imprime NaN

// Função com retorno

function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2, 3)); // Retorna 5
console.log(soma(2)); // Retorna 2
console.log(soma()); // Retorna NaN