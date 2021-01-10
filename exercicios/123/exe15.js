const arreyFinal = (value, indice) => indice % 2 === 0 && value % 2 == 0;

function receberSomenteOsParesDeIndicePares(array) {
    return array.filter(arreyFinal);
}

console.log(receberSomenteOsParesDeIndicePares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicePares([10, 70, 22, 43]));