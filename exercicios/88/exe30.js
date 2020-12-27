function maiorMenor(array) {
    let maiorNumero = array[0];
    let menorNumero = array[0];
    for (let i in array) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
        if (array[i] < menorNumero) {
            menorNumero = array[i];
        }
    }
    console.log(`O maior número é ${maiorNumero}`);
    console.log(`O menor número é ${menorNumero}`);
}

maiorMenor([23, 3984, 1, 3984, 9])