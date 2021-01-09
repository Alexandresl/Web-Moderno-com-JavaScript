function objetoParaArray(obj) {
    let array = Object.entries(obj);
    return array;
}

console.log(objetoParaArray({
    nome: "Maria",
    profissão: "Desenvolvedora de software"
}));

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}));