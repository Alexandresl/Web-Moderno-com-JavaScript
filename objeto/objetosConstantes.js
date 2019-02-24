// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }

pessoa.nome = 'Pedro'

console.log(pessoa)

// pessoa -> 456 ->  {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) // freeze -> Congela o objeto

// # Não irá funcionar! #
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa.end)

// Criando objeto congelado
const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)