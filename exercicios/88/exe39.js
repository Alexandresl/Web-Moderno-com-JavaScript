let vetorA = [1, 2, 3, 4, 5];
let vetorB = [6, 7, 8, 9, 10];

function trocaElementosVetores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        tamanho = vetorA.length
        for (let i = 0; i < tamanho; i++) {
            vetorB.push(vetorA[i]);
            vetorA.push(vetorB[i]);
        }
        for (let i = 0; i < tamanho; i++) {
            vetorA.shift();
            vetorB.shift();
        }
    } else {
        console.log("Vetor de tamanhos diferentes!");
    }
}

trocaElementosVetores(vetorA, vetorB);

console.log(`Vetor A: ${vetorA}`);
console.log(`Vetor B: ${vetorB}`);