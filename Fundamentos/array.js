const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]);
console.log(valores[4]); // Indice não existe, retorna undefined

valores[4] = 10;
console.log(valores);

console.log(valores.length); // retorna a quantidade de itens do array

valores.push({id: 3}, false, null, 'teste'); // função push adiciona elementos ao array

console.log(valores);

console.log(valores.pop()); // retira último elemento do array e retorna elemento retirado

delete valores[0] // deleta o elemento do array, preservando o índice dos demais elementos
console.log(valores);

console.log(typeof valores); // Array em JavaScript é um Objeto