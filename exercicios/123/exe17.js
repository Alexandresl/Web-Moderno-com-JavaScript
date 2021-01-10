const soma = (acumulador, atual) => acumulador + atual;

function somarNumeros(array) {
    const result = array.reduce(soma);
    return result;
}

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));