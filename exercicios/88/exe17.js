function aumentoSalario (planoTrabalho, salarioAtual) {
    switch (planoTrabalho) {
        case 'A':
            console.log(`O novo salário é R$ ${(salarioAtual * 1.1).toFixed(2)}`);
            break;
        case 'B':
            console.log(`O novo salário é R$ ${(salarioAtual * 1.15).toFixed(2)}`);
            break;
        case 'C':
            console.log(`O novo salário é R$ ${(salarioAtual * 1.2).toFixed(2)}`);
            break;
        default:
            console.log(`Plano inválido`);
    }
}

aumentoSalario('A', 100); // O novo salário é R$ 110.00
aumentoSalario('B', 100); // O novo salário é R$ 115.00
aumentoSalario('C', 100); // O novo salário é R$ 120.00
aumentoSalario('D', 100); // Plano inválido