const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinesese = f => f.pais === 'China'
const mulheres = f => f.genero ==='F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {

    const funcionarios = response.data
    console.log(funcionarios.filter(chinesese).filter(mulheres).reduce(menorSalario))

    
})



/**
 * Minha solução
 */

/* axios.get(url).then(response => {

    const funcionarios = response.data

    let menorSalario;

    const mulheres = func => func.genero === 'F'
    const chinesas = mulher => mulher.pais === 'China'

    let mulherChinesaMenorSalario

    funcionarios.filter(mulheres).filter(chinesas).forEach(f => {

        if (f.salario < menorSalario || !menorSalario) {

            mulherChinesaMenorSalario = f

            menorSalario = f.salario

        }

    })

    console.log(mulherChinesaMenorSalario)

}) */

