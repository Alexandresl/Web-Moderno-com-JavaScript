let valor; // sem nenhuma atribuição

console.log(valor); // retorna undefined pois não possui nenhuma valor atribuido

valor = null; // null significa que a variável não está apontando para nenhum endereço de memória

console.log(valor); // retorna null
//console.log(valor.toString); // retorna erro!

const produto = {};
console.log(produto.preco);
produto.preco = 3.5;

console.log(produto);

produto.preco = undefined; // Evitar!! não é boa prática
console.log(!!produto.preco); // retorna false
produto.preco = null; // sem preço!! Melhor prática
console.log(!!produto.preco); // retorna false

console.log(produto);