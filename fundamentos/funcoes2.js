// Armazenando uma função em uma variável

const imprimirSoma = function (a, b) {

    console.log(a + b)

}

imprimirSoma(2, 3)

// Armazenando uma função Arrow em uma variável

const soma = (a, b) => {

    console.log(a + b)

}

soma(2, 4)

const subtracao = (a, b) => a - b

console.log(subtracao(5, 3))

const imprimir2 = a => console.log(a)

imprimir2('Legal!!!')