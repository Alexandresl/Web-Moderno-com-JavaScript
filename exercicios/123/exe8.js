function multiplicar(multiplicando, multiplicador) {
    let result = 0;
    for (let i = multiplicador; i >= 1; i--) {
        result += multiplicando;
    }
    return result;
}

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));