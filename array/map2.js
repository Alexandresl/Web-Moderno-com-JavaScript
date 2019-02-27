const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "KitDeLapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]

// let result = carrinho.map(p => `R$ ${JSON.parse(p).preco}`)

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const precos = carrinho.map(paraObjeto).map(apenasPreco)

console.log(precos)