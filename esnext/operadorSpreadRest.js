// Operador ... rest(juntar) / spread(espalhar)
// Usar rest com parâmetros de funções

// usar spread com objetos
const funcionario = {nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]

console.log(grupoFinal)