// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); // 5
/**
 * No caso de não passarmos um segundo parâmetro,
 * ele irá assumir o valor de undefinec, assim o
 * resultado de um numero com undefined é NaN
 */
imprimirSoma(2) // NaN
/**
 * Caso seja colocado um número maior de parâmetros,
 * os valores "Extras" serão ignorados
 */
imprimirSoma(2, 10, 4, 5, 6, 7, 8); // 12
/**
 * Caso não seja passado nenhum parâmetro, os
 * dois assumirão o valor undefined e a soma
 * terá como resultado o NaN.
 */
imprimirSoma(); // NaN

// Função com retorno
function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2, 3)); // 5
console.log(soma(2)); // 3
console.log(soma()); // NaN