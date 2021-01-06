function inverso(entrada) {
    typeEntry = typeof entrada;
    switch (typeEntry) {
        case 'number':
            return -entrada;
        case 'boolean':
            return !entrada;
        default:
            return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeEntry}`;
    }
}

console.log(inverso(true));
console.log(inverso("6"));
console.log(inverso(-2000));
console.log(inverso("Programação"));