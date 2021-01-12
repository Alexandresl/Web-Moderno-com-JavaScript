const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

// retornar a mulher chinesa com menor salário

const mulher = (atual) => atual[1].genero === 'F';
const chinesa = (atual) => atual[1].pais === 'China'
const retornaMenorSalario = (menor, atual) => menor > atual ? atual : menor;

axios.get(url).then(response => {
    const funcionarios = Object.entries(response.data);
    const mulherChinesa = funcionarios.filter(mulher).filter(chinesa);
    const menorSalario = mulherChinesa.reduce(retornaMenorSalario);
    console.log(menorSalario);
});