console.log(typeof Object); // retorna function
console.log(typeof new Object()); // retorna object

/**
 * O mesmo pode ser realizado para uma função por 
 * nós definida. Exemplo:
 */

 const Cliente = function() {}

 console.log(typeof Cliente); // retorna function
 console.log(typeof new Cliente); // retorna object

 /**
  * Mesmo ocorre ao se declarar uma classe no 
  * JavaScript. Recurso adicionado no ES 2015 (ES6)
  */

  class Produto {}

  console.log(typeof Produto); // retorna function
  console.log(typeof new Produto()); // retorna object
