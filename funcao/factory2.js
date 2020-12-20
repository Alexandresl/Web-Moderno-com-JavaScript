function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

const notebook = criarProduto('Notebook', 2199.49);
const iPad = criarProduto('iPad', 1199.49);

console.log(notebook); // { nome: 'Notebook', preco: 2199.49, desconto: 0.1 }
console.log(iPad); // { nome: 'iPad', preco: 1199.49, desconto: 0.1 }