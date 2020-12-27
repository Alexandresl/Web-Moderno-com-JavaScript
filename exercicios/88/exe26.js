function pares(inicio, fim) {
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

pares(1, 100);