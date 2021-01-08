function receberPrimeiroEUltimoElemento(array) {
    let primeiroElemento = array[0];
    let ultimoElemento = array[array.length - 1];
    return [primeiroElemento, ultimoElemento];
}

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]));
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]));