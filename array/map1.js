const nums = [1, 2, 3, 4, 5]

// criando um array com cada elemento multiplicado por 2
let resultado = nums.map(valor => valor * 2);

console.log(resultado); // [ 2, 4, 6, 8, 10 ]

// Aplicando maps sucessívos
const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${e.toFixed(2).replace('.', ',')}`;
// Outra forma para transformar em valores monetários
const paraReal = e => e.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});

resultado = nums.map(soma10).map(triplo).map(paraReal);
console.log(resultado);