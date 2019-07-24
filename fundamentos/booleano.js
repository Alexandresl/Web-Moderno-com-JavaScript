// Variável recebe o valor literal falso
let isAtivo = false
console.log(isAtivo) // Retorna false  

isAtivo = true
console.log(isAtivo) // retorna true

// Variável recebe o valor 1
isAtivo = 1
console.log(!!isAtivo) // retorna true

console.log('Vamos conhecer os tipos que retornam verdadeiro:')
console.log(!!3) 
console.log(!!-1)  
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Vamos conhecer os tipos que retornam falso:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Para finalizar');
console.log(!!('' || null || 0 || ' ')); // retorna true







