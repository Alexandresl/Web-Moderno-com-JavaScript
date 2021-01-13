function tag(partes, ...valores) {
    console.log(partes); // [ '', ' está ', '' ]
    console.log(valores); // [ 'Gui', 'Aprovado' ]
    return 'Outra String...';
}

const aluno = 'Gui';
const situacao = 'Aprovado';
console.log(tag `${aluno} está ${situacao}`); // Outra String...