function noIntervalo1020(array) {
    let noIntervalo = 0;
    let foraDoIntervalo = 0;
    for (let i in array) {
        if (array[i] >= 10 && array[i] <= 20) {
            noIntervalo++;
        } else {
            foraDoIntervalo++;
        }
    }
    console.log(`${noIntervalo} numero(s) estão entre 10 e 20`);
    console.log(`${foraDoIntervalo} numero(s) não estão entre 10 e 20`);
}

noIntervalo1020([1, 3, 5, 7, 9, 11, 12, 13, 15, 17, 19]);