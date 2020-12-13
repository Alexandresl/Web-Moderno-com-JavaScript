// Fora mais reduzida com arrow function
// const resultado2 = nota => nota >= 7 ? 'Aprovvado' : 'Reprovado';

// Forma mais completa com arrow function
const resultado = (nota) => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado';
}

console.log(resultado(7.1)); // Aprovado
console.log(resultado(6.1)); // Reprovado