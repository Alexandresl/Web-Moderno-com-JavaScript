let valor; // variável não inicializada
console.log(valor); // undefined

valor = null; // ausência de valor
console.log(valor); // null

const produto = {};
console.log(produto.preco); // undefined
console.log(produto);
produto.preco = 3.50;
console.log(produto);

produto.preco = null; // utilizar o null
console.log(!!produto.preco); // false
console.log(produto); // { preco: null }