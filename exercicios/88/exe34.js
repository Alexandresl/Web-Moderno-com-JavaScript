function testaCaracteres(str1, str2) {
    let estaContido = true;
    for (let i = 0; i < str1.length; i++) {
        let charStr1 = str1.charAt(i).toLowerCase();
        for (let j = 0; j < str2.length; j++) {
            let charStr2 = str2.charAt(j).toLowerCase();
            if (charStr1 === charStr2) {
                estaContido = true;
                break;
            } else {
                estaContido = false;
            }
        }
        if (!estaContido) {
            return estaContido;
        }
    }
    return estaContido;
}

console.log(testaCaracteres('abc', 'csa'));