const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!";

const template = `
Olá
${nome}!
`;

console.log(concatenacao, template);

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();

console.log(`Ei... ${up("cuidado")}!`);