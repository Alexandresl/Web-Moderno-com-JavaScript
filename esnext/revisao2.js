// Arrow Function
const soma = (a, b) => a + b

console.log(soma(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === module.exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetros Default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte!')

// rest - spred

function total(...numeros) {

    let total = 0

    numeros.forEach(n => total += n)

    return total

}

console.log(total(1, 2, 3, 4, 5, 6))
