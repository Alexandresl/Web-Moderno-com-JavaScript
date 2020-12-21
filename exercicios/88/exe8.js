const stringPontuacoes = '10 20 20 8 25 3 0 30 1';

function progresso (stringPontuacoes) {
    const pontuacoes = stringPontuacoes.split(' ');
    let maiorPontuacao = pontuacoes[0];
    let menorPontuacao = pontuacoes[0];
    let qtdQuebraDeRecords = 0;
    let piorJogo = 0;
    for (let i in pontuacoes) {
        if (Number(pontuacoes[i]) > Number(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++;
        }
        if (Number(pontuacoes[i]) < Number(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = Number(i) + 1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo];
}

console.log(progresso(stringPontuacoes));