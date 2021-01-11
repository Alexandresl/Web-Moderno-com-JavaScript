function contarPalavras(string) {
    const paraArray = string.split(" ");
    return paraArray.length;
}

console.log(contarPalavras("Sou uma frase"));
console.log(contarPalavras("Me divirto aprendendo a programar!"));