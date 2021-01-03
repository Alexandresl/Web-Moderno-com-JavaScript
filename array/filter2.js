Array.prototype.meuFilter = function(callback) {
    let tempArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            tempArray.push(this[i]);
        }
    }
    return tempArray;
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const fragil = p => p.fragil;
const caro = p => p.preco >= 500;

const arrayFinal = produtos.meuFilter(fragil).meuFilter(caro);

console.log(arrayFinal);