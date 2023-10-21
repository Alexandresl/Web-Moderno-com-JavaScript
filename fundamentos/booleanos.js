let isAtivo = false;

console.log(isAtivo); // false

isAtivo = true;

console.log(isAtivo); // true

isAtivo = 1;

console.log(!!isAtivo); // true

isAtivo = 0;

console.log(!!isAtivo); // false

console.log();
console.log("Os tipos verdadeiros são:");
console.log(!!3); // true
console.log(!!-1); // true
console.log(!!" "); // true
console.log(!!"Texto"); // true
console.log(!![]); // true
console.log(!!{}); // true
console.log(!!Infinity); // true
console.log(!!(isAtivo = true)); // true

console.log();
console.log("Os tipos falsos são:");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log();
console.log("Para finalizar..");
console.log(!!('' || null || 0 || " "));