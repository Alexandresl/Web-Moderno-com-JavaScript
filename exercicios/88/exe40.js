function retornaConceito(arrayNotas) {
    let media = verificaMedia(arrayNotas);
    if (media < 5) {
        console.log("Seu conceito é D");
    } else if (media < 7) {
        console.log("Seu conceito é C");
    } else if (media < 9) {
        console.log("Seu conceito é B");
    } else {
        console.log("Seu conceito é A");
    }
}

function verificaMedia(array) {
    let total = 0;
    for (let i in array) {
        total += array[i]
    }
    return (total / array.length).toFixed(2);
}

retornaConceito([9, 10]);