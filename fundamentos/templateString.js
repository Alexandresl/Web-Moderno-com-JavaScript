const nome = 'Alexandre'

const concatenacao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}`

console.log(concatenacao, template);

// expressões matemáticas

console.log(`1 + 1 = ${1 + 1}`);

// A variável up recebe uma função.
const up = texto => texto.toUpperCase()

// Executamos a função recebida pela variável up.
console.log(`Ei... ${up('cuidado')}`);
