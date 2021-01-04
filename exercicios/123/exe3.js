function calcularSalario(qtdHorasMes, valorPorHora) {
    return "Salário igual a R$ ".concat((qtdHorasMes * valorPorHora).toFixed(2).replace('.', ','));
}

console.log(calcularSalario(150, 40.5));