function aumentoSalario (planoTrabalho, salarioAtual) {
    switch (planoTrabalho) {
        case 'A':
            console.log(`O novo salário é R$ ${salarioAtual * 1.1}`);
            break;
        case 'B':
            console.log(`O novo salário é R$ ${salarioAtual * 1.15}`);
            break;
        case 'C':
            console.log(`O novo salário é R$ ${salarioAtual * 1.2}`);
            break;
        default:
            console.log(`Plano inválido`);
    }
}

aumentoSalario('A', 100); // O novo salário é R$ 110.00000000000001
aumentoSalario('B', 100); // O novo salário é R$ 114.99999999999999
aumentoSalario('C', 100); // O novo salário é R$ 120
aumentoSalario('D', 100); // Plano inválido