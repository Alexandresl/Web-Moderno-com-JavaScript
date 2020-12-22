function calculaJurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    return `R$ ${(capitalInicial + capitalInicial * taxaJuros * tempoAplicacao).toFixed(2)}`;
}

function calculaJurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    return `R$ ${((capitalInicial * (1 + taxaJuros) ** tempoAplicacao)).toFixed(2)}`;
}

console.log(calculaJurosSimples(100, 0.1, 2));
console.log(calculaJurosCompostos(100, 0.1, 2));