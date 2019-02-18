const escola = "Cod3r"

/**
 * charAt() - retorna o caracter que estiver no índice passado
 * por parâmetro, sempre iniciando do índice zero (0).
 */
 
console.log(escola.charAt(4))
console.log(escola.charAt(5))
/**
 * charCodeAt() - Retorna o valor do caractere do código HTML.
 */
console.log(escola.charCodeAt(3))

/**
 * indexOf() - Retorna o índice onde o caractere passado como 
 * parâmetro está na string. caso não existe o caractere na 
 * string, retorna -1, o que é útil para sabermos se um caracter
 * encontra-se na string.
 */
console.log(escola.indexOf('3'))

/**
 * substring() = imprime a string a partir do índice passado
 * por parâmetro.
 * 
 * Quando passado dois parâmetro ele irá partir do primeiro
 * índice passado por parâmetro e terminar um índice antes 
 * do segundo índice passado por parâmetro.
 */
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

/**
 * Para concatenar usa-se o concat().
 */
console.log("Escola ".concat(escola).concat('!'))
console.log("Escola " + escola + '!')

/**
 * Replace() = substitui o primeiro argumento
 * pelo segundo argumento.
 */
console.log(escola.replace(3, 'e'))

/**
 * split() - separa partes de uma string a partir
 * do separador que é o parâmetro da função.
 */
console.log('Ana,Maria,Pedro'.split(','))