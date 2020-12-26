function Resultado(cod, nota1, nota2, nota3) {
    let media = calculaMediaPonderada(nota1, nota2, nota3);
    let restultado = media >= 5 ? "Aprovado" : "Reprovado";
    console.log(`Código do aluno: ${cod}\nNota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}\nMédia: ${media}\nResultado: ${restultado}`);
}

function calculaMediaPonderada(nota1, nota2, nota3) {
    let maior;
    let notaMenor1;
    let notaMenor2;
    if (nota1 >= nota2 && nota1 >= nota3) {
        maior = nota1;
        notaMenor1 = nota2;
        notaMenor2 = nota3;
    } else if (nota2 >= nota1 && nota2 >= nota3) {
        maior = nota2;
        notaMenor1 = nota1;
        notaMenor2 = nota3;
    } else {
        maior = nota3;
        notaMenor1 = nota1;
        notaMenor2 = nota2;
    }
    return ((maior * 4) + (notaMenor1 * 3) + (notaMenor2 * 3)) / 10
}

Resultado(100, 5, 5, 5)
Resultado(100, 4, 5, 5)
Resultado(100, 4, 5, 6)