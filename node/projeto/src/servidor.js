const porta = 3003;

const express = require('express')
const app = express();

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45}) // Converte para json
});

app.listen(porta, () => {
    console.log(`servidor executando na porta ${porta}.`);
})