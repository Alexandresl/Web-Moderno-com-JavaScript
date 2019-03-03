const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// Sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)

// Assincrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Outro método específico para JSON
const config = require('./arquivo.json')

console.log('aqui', config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})