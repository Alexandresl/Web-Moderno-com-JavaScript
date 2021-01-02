const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Object.keys retorna todas as chaves do objeto em formato de array
console.log(Object.keys(pessoa)); // [ 'nome', 'idade', 'peso' ]
// Object.values retorna todas os valores do objeto em formato de array
console.log(Object.values(pessoa)); // [ 'Rebeca', 2, 13 ]
// Object.entries retorna todas as chaves e valores de um objeto em formato de array
console.log(Object.entries(pessoa)); // [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});
/**
 * Retorno do forEach:
 * 
 * nome: Rebeca
 * idade: 2
 * peso: 13
 */

//
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // para aparecer nos métodos keys, values, entries, ...
    writable: false, // funciona como o Object.freezy
    value: '01/01/2019'
});

pessoa.dataNascimento = '01/01/2021';
console.log(pessoa.dataNascimento); // 01/01/2019
console.log(Object.keys(pessoa)); // [ 'nome', 'idade', 'peso', 'dataNascimento' ]

/**
 *  Object.assign (ECMAScript 2015)
 *  Pega o primeiro objeto
 *  e acrecenta o elementos dos 
 *  demais objetos.
 *  Também retorna o objeto completo
 *  Podendo ser armazenada em outra 
 *  objeto
 */

const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log('dest', dest); // dest { a: 4, b: 2, c: 3 }
console.log('o1', o1); // o1 { b: 2 }
console.log('o2', o2); // o2 { c: 3, a: 4 }
console.log('obj', obj); // obj { a: 4, b: 2, c: 3 }

// Com o Object.freeze o objeto não permitirá qualquer alteração
Object.freeze(obj);
obj.c = 1234;
console.log(obj); // { a: 4, b: 2, c: 3 }