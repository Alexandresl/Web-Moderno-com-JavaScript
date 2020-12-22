function classificaAluno(nota) {
    const notaCorrigida = arredondar(nota);
    if (notaCorrigida < 40) {
        console.log(`Aluno foi reprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Aluno foi aprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota < 38) {
        return nota
    } else if (nota % 5 >= 3 ) {
        return nota = nota + (5 - (nota % 5))
    } else {
        return nota = nota - (nota % 5)
    }
}

classificaAluno(29);
classificaAluno(38);
classificaAluno(84);