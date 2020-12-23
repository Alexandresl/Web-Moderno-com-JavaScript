function diasDaSemana(dia) {
    switch (dia) {
        case 1:
            return 'Fim de samana';
        case 2:
            return 'Dia útil';
        case 3:
            return 'Dia útil';
        case 4:
            return 'Dia útil';
        case 5:
            return 'Dia útil';
        case 6:
            return 'Dia útil';
        case 7:
            return 'Fim de samana';
        default:
            return 'Dia inválido'
    }
}

console.log(diasDaSemana(0)); // Dia inválido
console.log(diasDaSemana(1)); // Fim de samana
console.log(diasDaSemana(2)); // Dia útil
console.log(diasDaSemana(3)); // Dia útil
console.log(diasDaSemana(4)); // Dia útil
console.log(diasDaSemana(5)); // Dia útil
console.log(diasDaSemana(6)); // Dia útil
console.log(diasDaSemana(7)); // Fim de samana
console.log(diasDaSemana(8)); // Dia inválido