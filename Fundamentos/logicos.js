function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    // const comprarTV32 = !!(trabalho1 ^ trabalho2); // Não recomendado
    const comprarTV32 = trabalho1 != trabalho2; // Não recomendado
    const manterSaudável = !comprarSorvete;

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudável }
}

console.log(compras(true, true)); // { comprarSorvete: true, comprarTV50: true, comprarTV32: false, 'manterSaudável': false }
console.log(compras(true, false)); // { comprarSorvete: true, comprarTV50: false, comprarTV32: true, 'manterSaudável': false }
console.log(compras(false, true)); // { comprarSorvete: true, comprarTV50: false, comprarTV32: true, 'manterSaudável': false }
console.log(compras(false, false)); // { comprarSorvete: false, comprarTV50: false, comprarTV32: false, 'manterSaudável': true }