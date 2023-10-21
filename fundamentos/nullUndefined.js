let valor // não inicializada

console.log(valor); // undefined

valor = null; // Não aponta para nenhum endereço de memória

console.log(valor); // null

// console.log(valor.toString()); // Erro!

const produto = {}
console.log(produto.preco); // undefined
console.log(produto); // {}

produto.preco = 3.5;

console.log(produto); // { preco: 3.5 }

produto.preco = undefined; // Evite
console.log(!!produto.preco); // false
// delete produto.preco
console.log(produto); // { preco: undefined }

produto.preco = null // sem preço
console.log(!!produto.preco); // false

console.log(produto); // { preco: null }