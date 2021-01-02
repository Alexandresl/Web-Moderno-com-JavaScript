console.log(typeof Array, typeof new Array, typeof []); // function object object

// Forma "Alternativa" para criação de array (não recomendada)
let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados); // [ 'Bia', 'Carlos', 'Ana' ]
// Forma "Tradicional" para declaração de arrays
aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]); // Bia
console.log(aprovados[1]); // Carlos
console.log(aprovados[2]); // Ana
console.log(aprovados[3]); // undefined

aprovados[3] = 'Paulo';
console.log(aprovados[3]); // Paulo
aprovados.push('Abia');
console.log(aprovados.length); // 5
aprovados[9] = 'Rafael';
console.log(aprovados.length); // 10
console.log(aprovados[8] === undefined); // true
console.log(aprovados); // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]
aprovados.sort();
console.log(aprovados); // [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

delete aprovados[1];
console.log(aprovados[1]); // undefined
console.log(aprovados[2]); // bia

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1); // A partir do índice 1, irá remover 1 índice
console.log(aprovados); // ['Bia', 'Ana']