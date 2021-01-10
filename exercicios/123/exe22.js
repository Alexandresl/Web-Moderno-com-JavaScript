function funcaoDaSorte(num) {
    const min = 1;
    const max = 10;
    const numDaSorte = Math.floor(Math.random() * (max - min) + min);
    if (numDaSorte === num) {
        return `Parabéns! O número sorteador foi o ${numDaSorte}.`;
    } else {
        return `Que Pena! O número sorteador foi o ${numDaSorte}.`;
    }
}

console.log(funcaoDaSorte(1));