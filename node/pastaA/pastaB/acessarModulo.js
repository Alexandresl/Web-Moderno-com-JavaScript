// Caminho relativo para módulos da minha aplicação
const moduloA = require('../../moduloA');
console.log(moduloA.ola);

// Acessar módulos do node_modules
const saudacao = require('saudacao');
console.log(saudacao.ola);

// Acessar módulos do core do Node.js
const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia!');
    res.end();
}).listen(8080);