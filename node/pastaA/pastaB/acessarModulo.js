const moduloA = require('../../moduloA')

// Foi criado uma pasta saudacao em node_modules com um index.js
const saudacao = require('saudacao')

const c = require('./pastaC')

console.log(c.ola2)

console.log(moduloA.ola)
console.log(saudacao.ola)

/* const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) */