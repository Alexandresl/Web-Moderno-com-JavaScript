Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra');
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado');
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação');
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado');
    } else {
        console.log('Nota inválida');
    }
}

imprimirResultado(10);  // Quadro de Honra
imprimirResultado(8.9);  // Aprovado
imprimirResultado(6.55);  // Recuperação
imprimirResultado(2.3);  // Reprovado
imprimirResultado(-1);  // Nota inválida
imprimirResultado(11);  // Nota inválida