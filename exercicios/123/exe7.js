function estaEntre(numero, minimo, maximo, inclusivo = false) {

    if (minimo > maximo) {
        [minimo, maximo] = [maximo, minimo]  
    } 
    
    if (inclusivo) {
        minimo--;
        maximo++;
    }

    return numero > minimo && numero < maximo;

}

console.log(estaEntre(60, 100, 50));
console.log(estaEntre(16, 100, 160));
console.log(estaEntre(3, 150, 3));
console.log(estaEntre(3, 150, 3, true));