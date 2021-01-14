const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

function leArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => 
            resolve(conteudo.toString()));
    });
}

leArquivo(caminho)
    .then(console.log);