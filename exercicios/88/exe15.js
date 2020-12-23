function revenda (modelo) {
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso';
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            return 'Tem certeza que não prefere este modelo?';
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui';
    }
}

console.log(revenda('hatch')); // Compra efetuada com sucesso
console.log(revenda('sedans')); // Tem certeza que não prefere este modelo?
console.log(revenda('motocicletas')); // Tem certeza que não prefere este modelo?
console.log(revenda('caminhonetes')); // Tem certeza que não prefere este modelo?
console.log(revenda('jipe')); // Não trabalhamos com este tipo de automóvel aqui