function compra(codigo, qtd) {
    let total;
    switch (codigo) {
        case 100:
            total = 3;
            break;
        case 200:
            total = 4;
            break;
        case 300:
            total = 5.5;
            break;
        case 400:
            total = 7.5;
            break;
        case 500:
            total = 3.5;
            break;
        case 600:
            total = 2.8;
            break;
        default:
            return "Produto inválido";
        }
    return total *= qtd;
}

console.log(compra(100, 3)); // 9
console.log(compra(101, 3)); // Produto inválido