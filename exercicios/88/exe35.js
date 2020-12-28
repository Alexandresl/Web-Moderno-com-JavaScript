let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

function mescla(vetorPilha, vetorAdiciona) {
    for (let i = 0; i < vetorAdiciona.length; i++) {
        vetorPilha.push(vetorAdiciona[i]);
    }
}

mescla(vetorPilha, vetorAdiciona);

console.log("Vetor adicionado: " + vetorAdiciona);
console.log("Vetor Resultado: " + vetorPilha);