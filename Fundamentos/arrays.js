const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); // 7.7 9.2
console.log(valores[4]); // undefined

valores[4] = 10;
console.log(valores); // [ 7.7, 8.9, 6.3, 9.2, 10 ]
console.log(valores.length); // 5
valores.push({id: 3}, false, null, 'teste') // Evitar arrays heterogênios
console.log(valores); // [ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste']

console.log(valores.pop()); // teste
delete valores[0];
console.log(valores); // [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]

console.log(typeof valores); // object