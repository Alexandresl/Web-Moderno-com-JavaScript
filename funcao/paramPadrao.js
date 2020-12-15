// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    /**
     * caso o valor booleano da variável seja false, 
     * irá receber o valor 1.
     */
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1()); // 3
console.log(soma1(3)); // 5
console.log(soma1(1, 2, 3)); // 6
console.log(soma1(0, 0, 0)); // 3 - CUIDADO!!!

/**
 * estratégia 2, 3 e 4 para gterar valor padrão com o
 * uso de ternário
 */

function soma2(a, b, c) {
    a = a !== undefined ? a : 1; // com o undefined
    b = 1 in arguments ? b : 1; // pegando a posição em arguments
    c = isNaN(c) ? 1 : c; // verificando se não é um number - MELHOR ALTERNATIVA
    return a + b + c;
}

console.log(soma2()); // 3
console.log(soma2(3)); // 5
console.log(soma2(1, 2, 3)); // 6
console.log(soma2(0, 0, 0)); // 0

// Usando o valor padrão do ES2015 - \0/

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma3()); // 3
console.log(soma3(3)); // 5
console.log(soma3(1, 2, 3)); // 6
console.log(soma3(0, 0, 0)); // 0