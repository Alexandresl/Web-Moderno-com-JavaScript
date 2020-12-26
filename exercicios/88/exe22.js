function pagarAssociacao (mes, valor) {
    montante = valor * Math.pow((1 + 0.05), mes - 1);
    return montante.toFixed(2);
}

console.log(pagarAssociacao(1, 100));
console.log(pagarAssociacao(2, 100));
console.log(pagarAssociacao(4, 100));