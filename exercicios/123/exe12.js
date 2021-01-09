function removerPropriedade(obj, atr) {
    const copia = Object.assign({}, obj);
    delete copia[atr];
    return copia;''
}

console.log(removerPropriedade({a: 1, b: 2}, "a"));

console.log(
    removerPropriedade({
        id: 20,
        nome: "caneta",
        descricao: "Não preenchido"
    }, "descricao"));