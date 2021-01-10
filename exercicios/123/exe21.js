const pegaMenor = (menor, atual) => menor > atual ? atual : menor;

function menorNumero(array) {
    const menorValor = array.reduce(pegaMenor);
    return menorValor;
}

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));