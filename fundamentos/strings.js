// declara uma constante chamada escola
const escola = "IFRS"

/**
 * Vamos conhecer uma série de funções para
 * manipularmos as strings.
 */

/**
 * charAt(x) - retorna a letra que está no
 * índice x. Iniciando no índice 0 (zero).
 * Caso seja passado um índice que não existe,
 * ele apenas retorna vazio.
 */
console.log(escola.charAt(2)) 
// resultado R

/**
 * charCodeAt(x) - retorna o código HTML da letra 
 * que está no índice passado como parâmetro.
 */
console.log(escola.charCodeAt(2)) 
// resultado 82

/**
 * indexOf(x) - Retorna o índice onde está o caractere
 * passado por parâmetro
 */
console.log(escola.indexOf('R')) 
// Resultado 2

/**
 * substring() - retorna a variável a partir do
 * índice passado por parâmetro ou caso seja passado
 * 2 parâmetros é a partir do primeiro até um antes do 
 * segundo parâmetro
 */
console.log(escola.substring(1)) 
// Resultado FRS

console.log(escola.substring(2, 4)) 
// Resultado FR

/**
 * concat("") - Concatena variáveis. A string passada
 * por parâmetro poderá ser literal, ou seja, passada
 * utilizando algum simbolo para escrevermos as strings
 * ou através de string armazenada em variáveis.
 */
console.log('Estude no '.concat(escola).concat("!"))
// Retorna Estude no IFRS!
/**
 * Podemos também utilizar o operador mais (+) para realizar
 * o recurso de concatenação.
 */
console.log('Estude no ' + escola + '!')
// Retorna Estude no IFRS!


/**
 * replace() - Substitui dentro de uma string
 * uma string por outra.
 */
console.log(escola.replace("I", "U"))
// Retorna UFRS

/**
 * split() - converte uma string em array a partir
 * do separador passado por parâmetro.
 */
console.log("Ana,Maria,Pedro".split(','))
// Retorna ['Ana', 'Maria', 'Pedro']