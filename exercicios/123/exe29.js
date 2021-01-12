function segundoMaior (array) {
    let maiorNumero = Math.max(...array);
    const newArray = array.filter((elemento) => elemento != maiorNumero);
    let segundoMaior = Math.max(...newArray);
    return segundoMaior;
}

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));