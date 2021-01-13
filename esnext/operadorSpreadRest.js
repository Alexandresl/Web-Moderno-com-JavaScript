const funcionario = {
    nome: 'Maria',
    salario: 1234.99
}

const clone = {
    ativo: true,
    ...funcionario
}

console.log(clone); // { ativo: true, nome: 'Maria', salario: 1234.99 }

const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA, 'rafaela']
console.log(grupoFinal); // [ 'Maria', 'João', 'Pedro', 'Glória', 'rafaela' ]