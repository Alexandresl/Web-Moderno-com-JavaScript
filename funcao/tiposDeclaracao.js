/**
 * Posso chamar uma função declarada com function
 * antes de sua declaração
 */
console.log(soma(3, 4));
/**
 * O mesmo não ocorre com funções atribuídas a 
 * variáveis. Esta chamada:
 * console.log(sub(4, 3));
 * gera erro: "Cannot access 'sub' before initialization"
 * "Não é possível acessar 'sub' antes da inicialização" 
 */


// function declaration
function soma(x, y) {
    return x + y;
}

// function expression
const sub = function (x, y) {
    return x - y;
}
console.log(sub(3, 4));

// named function expression
/**
 * Este tipo de declaração é pouco usado e
 * só acrescentaria algum benefício em algumas
 * situações de debag onde apareceria o nome
 * da função que está gerando algum tipo de 
 * erro.
 */
const mult = function mult(x, y) {
    return x * y;
}
console.log(mult(3, 4));