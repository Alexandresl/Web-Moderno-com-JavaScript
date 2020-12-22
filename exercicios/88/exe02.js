function verificaTriângulo (l1, l2, l3) {
    if (l1 == l2 && l1 == l3) {
        console.log("O triângulo é equilátero");
    } else if (l1 == l2 || l2 == l3 || l1 == l3) {
        console.log("O triângulo é isósceles");
    } else {
        console.log("O triângulo é escaleno");
    }
}

verificaTriângulo(3, 3, 3)
verificaTriângulo(4, 3, 3)
verificaTriângulo(1, 2, 3)