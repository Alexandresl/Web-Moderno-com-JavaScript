function numerosImpares(inicio, fim) {
    inicio > fim ? [inicio, fim] : [fim, inicio];
    let impares = []
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 != 0) {
            impares.push(i)
        }
    }
    let res = "";
    for (let i in impares) {
        res = res.concat(impares[i], ", ")
    }
    console.log(res);
}

numerosImpares(0, 100);