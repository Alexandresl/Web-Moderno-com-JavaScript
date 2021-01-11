function contarCaractere(caractere, string) {
    return [...string].filter(caractereBuscado => caractere === caractereBuscado).length;
}

console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));