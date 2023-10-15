const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
// retorna se o número é inteiro ou não
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

// Determina o número de casas decimais
console.log(media.toFixed(2));

// Retorna o número como string
console.log(media.toString());

// Retorna o número em binário com o parâmetro 2
console.log(media.toString(2));

// retorna o tipo do dado
console.log(typeof media);

// retorna o tipo de dado de Number
console.log(Number);