// Object.PreventExtensions
const produuto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produuto)); // Extensível: false

produuto.nome = 'Borracha';
produuto.descricao = 'Borracha escolar branca';
delete produuto.tag;
console.log(produuto); // { nome: 'Borracha', preco: 1.99 }

// Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa)); // true
pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa); // { nome: 'Juliana', idade: 29 }

// Object.freeze
