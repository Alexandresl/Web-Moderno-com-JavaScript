let dobro = function (a) {

    return 2 * a

}

dobro = (a) => {

    return 2 * a

}

dobro = a => {

    return 2 * a

}

dobro = a => 2 * a // O return está implícito

console.log(dobro(6))

let ola = function () {

    return 'Olá'

}

ola = () => 'Olá'

console.log(ola())