var a = 3;
let b = 4;

/**
 * Redeclarar a "var a", embora
 * não gere erro, não é uma boa 
 * prática.
 * 
 * Já o let não permite ser 
 * redeclarado.
 */
var a = 30;
b = 40;

console.log(a, b); // Saída: 30 40

a = 300;
b = 400;

console.log(a, b); // Saída: 300 400

const c = 5; // Neste caso não é permitido modificar o valor

console.log(c); // Saída: 5