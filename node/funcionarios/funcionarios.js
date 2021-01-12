const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

// retornar a mulher chinesa com menor salário

const mulher = (atual) => atual.genero === 'F';
const chinesa = (atual) => atual.pais === 'China'
const retornaMenorSalario = (menor, atual) => menor.salario > atual.salario ? atual : menor;

axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(funcionarios);
    const resposta = funcionarios.filter(chinesa).filter(mulher).reduce(retornaMenorSalario);
    console.log(resposta);
});