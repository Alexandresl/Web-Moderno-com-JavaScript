let vetorInteiro = [9, 8, 4, 2];
let vetorString = ["Laranja", "Melancia", "Limão", "Uva"];
let vetorDouble = [9.8, 8.4, 4.2, 2.9];

function concatArrays(...args) {
    let result = [];
    for (let i in args) {
        result = result.concat(args[i])
    }
    return result;
}

console.log(concatArrays(vetorInteiro, vetorString));
console.log(concatArrays(vetorString, vetorDouble));
