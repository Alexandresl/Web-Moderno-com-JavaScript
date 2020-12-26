function valorPlanoSaude(idade) {
    let valorTotal = 100;
    if (idade < 10) {
        valorTotal += 80;
    } else if (idade >= 10 && idade < 30) {
        valorTotal += 50;
    } else if (idade >= 30 && idade < 60) {
        valorTotal += 95;
    } else {
        valorTotal += 130;
    }
    console.log(`O valor total do plano é R$ ${valorTotal.toFixed(2)}`);
}

valorPlanoSaude(9);
valorPlanoSaude(10);
valorPlanoSaude(30);
valorPlanoSaude(80);