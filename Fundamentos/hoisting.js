/**
 * Neste exemplo apesar da variável estar declarada na linha
 * 9, isto não gera erro por conta do hoisting. O JavaScript
 * "Joga para cima" a declaração da variável a, apesar de seu
 * valor só ser definido na linha 9. Como se a variável a
 * fosse declarada antes da linha 8.
 */
console.log('a =', a); // Imprime undefined
var a = 2;
console.log('a =', a); // Imprime 2


/**
 * O Let não realiza o efeito do hosting, assim o exemplo
 * abaixo geraria erro, o que não ocorre com o var
 */
// console.log('b =', b);
// let b = 2;
// console.log('b =', b);