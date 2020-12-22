function anoBissexto (ano) {
    let anoBissexto;
    if (ano <= 0) {
        anoBissexto = false;
    } else if (ano % 400 == 0) {
        anoBissexto = true;
    } else if (ano % 100 == 0) {
        anoBissexto = false;
    } else if (ano % 4 == 0) {
        anoBissexto = true;
    } else {
        anoBissexto = false;
    }
    if (!anoBissexto) {
        console.log(`O ano ${ano} não é bissexto`);
        return false;
    }
    console.log(`O ano ${ano} é bissexto`);
    return true;
}

console.log(anoBissexto(0));
console.log(anoBissexto(4));
console.log(anoBissexto(100));
console.log(anoBissexto(400));
console.log(anoBissexto(800));
console.log(anoBissexto(2020));
console.log(anoBissexto(2021));