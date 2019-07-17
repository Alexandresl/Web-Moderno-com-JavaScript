/**
 * Declaramos uma constante
 * com o identificador peso1
 * que irá receber um número
 * de ponto flutuante
 */
const peso1 = 1.0

/**
 * Podemos declara utilizando
 * um objeto do tipo Number
 * que iremos estudar futuramente
 */
const peso2 = Number('2.0')

console.log(peso1, peso2)
/**
 * Number.isInteger() retorna 
 * um boolean true caso o 
 * parâmetro seja inteiro
 */
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

/**
 * toFixed() define o número de casas
 * decimais que será considerado de um
 * número de ponto flutuante
 */
console.log(media.toFixed(2))

/**
 * Em algumas situações poderemos querer
 * converter um number em string. Podemos
 * fazer isso utilizando a função
 * toString()
 */
console.log(media.toString())

/**
 * Caso queiramos converter o valor de
 * média para binário, basta passar o 
 * 2 como parâmetro.
 */
console.log(media.toString(2))

/**
 * Podemos também testar o tipo de dado
 * da variável com o typeof.
 */
console.log(typeof media)

/**
 * Devemos ter presenque que number
 * é um tipo de dado e que Number,
 * com letra maiúscula é uma função,
 * conforme retorno abaixo.
 */
console.log(typeof Number);

