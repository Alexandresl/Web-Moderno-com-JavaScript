let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 2; // Qualquer valor diferente de 0 representa true
console.log(!!isAtivo);

isAtivo = 0; // representa o false
console.log(!!isAtivo);

console.log("\nOs valores verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("\nOs valores falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('para finalizar...');
console.log(!!('' || null || 0 || ' '));