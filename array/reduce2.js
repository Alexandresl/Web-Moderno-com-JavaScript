const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1 - Todos os alunos são bolsistas?

const todosBolsistas = alunos => alunos.bolsista

const resultado = alunos.map(todosBolsistas).reduce(function(acumulador, atual) {

    return acumulador && atual

})

console.log('Desafio 1:', resultado)


//Desafio 2 - Algum alunos é bolsista?

const algumBolsista = alunos => alunos.bolsista

const resultado2 = alunos.map(algumBolsista).reduce(function(acumulador, atual) {

    return acumulador || atual

})

console.log('Desafio 2:', resultado2)