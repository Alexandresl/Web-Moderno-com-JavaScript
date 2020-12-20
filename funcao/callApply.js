function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${(this.preco * (1 - this.desc) * (1 + imposto)).toFixed(2)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4599,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco());

const carro = {
    preco: 49999,
    desc: 0.20
}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

// No call, os parâmetros são passados na própria função
console.log(getPreco.call(carro, 0.17, '$'));
// No apply, os parâmetros são passados através de um array
console.log(getPreco.apply(carro, [0.17, '$']));