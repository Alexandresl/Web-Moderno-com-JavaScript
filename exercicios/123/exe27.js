function inverter(obj) {
    const objInvertido = {}
    Object.entries(obj).forEach((parChaveValor) => {
        const chave = 0, valor = 1
        return objInvertido[parChaveValor[valor]] = parChaveValor[chave];
    });
    return objInvertido;
}

console.log(inverter({ a: 1, b: 2, c: 3 }));