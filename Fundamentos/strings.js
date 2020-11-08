const escola = 'cod3r';

console.log(escola.charAt(4)); // retorna "r"
console.log(escola.charAt(5)); // retorna vazio, sem gerar erro, apesar do índice não existir
console.log(escola.charCodeAt(3)); // código Unicode para o 3
console.log(escola.indexOf('3')); // retorna o índice da string 3
console.log(escola.substr(1)); // retorna a string a partir do índice 1
console.log(escola.substr(0, 3)); // retorna a string do indice 0 até um antes do indice 3
console.log('Escola '.concat(escola).concat("!")); // conseguimos concatenar mesmo usando um valor literal
console.log(escola.replace(3, 'e')); // primeiro argumento é o indice que será substituido e o segundo é a string
console.log('Ana,Maria,Pedro'.split(',')); // transforma a string em Array, utilizando o separdor passado por parâmetro