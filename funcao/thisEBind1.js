const pessoa = {
    saudacao: 'Bom dia',
    falar: function () {
        console.log(this.saudacao);
    }
}

pessoa.falar();

const falar = pessoa.falar;
/**
 * Ao chamar a função a partir da constante falar
 * o this, perde a referência do objeto pessoa
 * returnando undefined
 */
falar() // undefined

/**
 * Para que o this utilizado na função falar do objeto
 * pessoa não perca a referência, podemos utilizar a 
 * função bind, que receberá como parâmetro o objeto
 * que o this está referenciando.
 */
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa(); // Bom dia