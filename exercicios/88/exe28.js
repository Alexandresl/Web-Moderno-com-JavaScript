function separarParImpar(array) {
    let contadorPar = 0;
    let contadorImpar = 0;
    for (let i in array) {
        array[i] % 2 == 0 ? contadorPar++ : contadorImpar++;
    }
    console.log(`São ${contadorPar} numero(s) par(es) e ${contadorImpar} número(s) ímpar(es)`);
}

separarParImpar([1, 3, 78, 90, 13])