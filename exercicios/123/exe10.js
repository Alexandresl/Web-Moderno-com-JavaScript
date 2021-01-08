function simboloMais(num) {
    let str = "";
    for (let i = 0; i < num; i++) {
        str = str.concat("+");
    }
    return str;
}

console.log(simboloMais(2));
console.log(simboloMais(4));