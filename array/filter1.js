const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const fragil = p => p.fragil;
const caro = p => p.preco >= 500;

const arrayFinal = produtos.filter(fragil).filter(caro);

console.log(arrayFinal);

/**
 * Saída:
 * 
 * [
 *  { nome: 'Notebook', preco: 2499, fragil: true },
 *  { nome: 'iPad Pro', preco: 4199, fragil: true }
 * ]
 * 
 */