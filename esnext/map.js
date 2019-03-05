const tecnologias = new Map()

tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react'))
console.log(tecnologias.get('angular').framework)

const chavesVairadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Number']
])

chavesVairadas.forEach((value, chave) => {

    console.log(chave, value)

})

console.log(chavesVairadas.has(123))
chavesVairadas.delete(123)
console.log(chavesVairadas.has(123))

console.log(chavesVairadas.size)