let soPreco = (obj) => obj.preco;
let somaPreco = (acumulador, atual) => acumulador + atual;

function despesasTotais(arrayObj) {
    let result = arrayObj.map(soPreco).reduce(somaPreco);
    return result;
}

console.log(despesasTotais([
    {nome: "Jornal Online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]));
console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]));