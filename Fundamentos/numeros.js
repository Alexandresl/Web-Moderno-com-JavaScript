const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
// Imprime se peso1 é inteiro
console.log(Number.isInteger(peso1));
// Imprime se peso2 é inteiro
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)

// toFixed() define o número de casas decimais
console.log(media.toFixed(2));
// toString() transforma um númerico em string
console.log(media.toString());
// toString(2) transforma um númerico em binário
console.log(media.toString(2));
console.log(typeof media);
console.log(typeof Number); // Isto é uma função!