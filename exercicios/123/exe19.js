const somaValores = (acumulador, valor) => acumulador + valor;

function calcularMedia(array) {
    const total = array.reduce(somaValores);
    return total / array.length;
}

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));