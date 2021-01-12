function buscarPalavrasSemelhantes(palavra, array) {
    const result = array.filter((elemento) => elemento.includes(palavra));
    return result;
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]));
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]));