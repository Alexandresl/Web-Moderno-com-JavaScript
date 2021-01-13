const tecnologias = new Map();
tecnologias.set('react', { framework: false});
tecnologias.set('Angular', { framework: true});

console.log(tecnologias.get('react')); // { framework: false }
console.log(tecnologias.get('react').framework); // false

const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]);

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
})
// saídas:
// [Function (anonymous)] Função
// {} Objeto
// 123 Número

console.log(chavesVariadas.has(123)); // true
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123)); // false
console.log(chavesVariadas.size); // 2