function ATM (value) {
    let nota100 = 0;
    let nota50 = 0;
    let nota10 = 0;
    let nota5 = 0;
    let nota1 = 0;
    let valorNota = calcularValorNota(value)
    while (valorNota > 0) {
        switch (valorNota) {
            case 100:
                nota100++;
                value -= 100;
                break;
            case 50:
                nota50++;
                value -= 50;
                break;
            case 10:
                nota10++;
                value -= 10;
                break;
            case 5:
                nota5++;
                value -= 5;
                break;
            case 1:
                nota1++;
                value -= 1;
                break;
        }

        valorNota = calcularValorNota(value);
    }

    imprimeNotas(nota100, nota50, nota10, nota5, nota1);

}

function calcularValorNota(value) {
    if (value >= 100) {
        return 100;
    } else if (value >= 50) {
        return 50;
    } else if (value >= 10) {
        return 10;
    } else if (value >= 5) {
        return 5;
    } else if (value >= 1) {
        return 1;
    } else {
        return 0;
    }
}

function imprimeNotas(notas100, notas50, notas10, notas5, notas1) {
    if (notas100) {
        console.log(`${notas100} nota(s) de R$ 100,00`);
    }
    if (notas50) {
        console.log(`${notas50} nota(s) de R$ 50,00`);
    }
    if (notas10) {
        console.log(`${notas10} nota(s) de R$ 10,00`);
    }
    if (notas5) {
        console.log(`${notas5} nota(s) de R$ 5,00`);
    }
    if (notas1) {
        console.log(`${notas1} nota(s) de R$ 1,00`);
    }
}

ATM(167.00);