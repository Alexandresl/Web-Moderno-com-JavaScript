function numerosNegativos(array) {
    let contNegativos = 0;
    for (let i in array) {
        if (array[i] < 0) {
            contNegativos++;
        }
    }
    console.log(`A quantidade de números negativos é ${contNegativos}`);
}

numerosNegativos([0, 3, -2, 10, -5]);