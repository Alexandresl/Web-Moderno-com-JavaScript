let a = 3

global.b = 123

this.c = 456

this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

abc = 3
console.log(global.abc)

var cde = 4 // Criando uma variável sem var ou let. Não faça isso!

console.log(global.cde)

console.log(module.exports)