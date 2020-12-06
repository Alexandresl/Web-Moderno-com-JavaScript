const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(area.toFixed(2)); // 98.52
console.log(typeof Math); // object

/**
 * A partir do ecmaScript 2016 ganhamos o
 * operador de exponenciação (**), simplificando
 * este tipo de operação
 */
console.log((Math.PI * raio ** 2).toFixed(2)); // 98.52