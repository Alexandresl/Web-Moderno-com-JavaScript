const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop();
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikkonen' ]
pilotos.push('Verstappen');
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]
pilotos.shift();
console.log(pilotos); // [ 'Alonso', 'Raikkonen', 'Verstappen' ]
pilotos.unshift('Hamilton');
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

/**
 * splice pode adicionar e remover
 */

 // Adicionar
 pilotos.splice(2, 0, 'Bottas', 'Massa');
 console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

 // Remover
 pilotos.splice(3, 1)
 console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

 const algunsPilotos1 = pilotos.slice(2);
 console.log(algunsPilotos1); // [ 'Bottas', 'Raikkonen', 'Verstappen' ]
 const algunsPilotos2 = pilotos.slice(1, 4);
 console.log(algunsPilotos2); // [ 'Alonso', 'Bottas', 'Raikkonen' ]