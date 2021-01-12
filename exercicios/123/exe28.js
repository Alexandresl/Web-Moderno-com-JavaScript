function filtrarPorQuantidadeDeDigitos(array, qtdDigitos) {
    const newArray = array.filter((element) => {
        return element.toString().split('').length == qtdDigitos;
    });
    return newArray;
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));