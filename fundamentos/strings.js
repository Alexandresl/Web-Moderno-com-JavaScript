const escola = "Cod3r";

console.log(escola.charAt(4)); // r
console.log(escola.charAt(5)); // não existe
console.log(escola.charCodeAt(3)); // 51
console.log(escola.indexOf("3")); // 3
console.log(escola.substring(1)); // od3r
console.log(escola.substring(0, 3)); // cod

console.log("Escola ".concat(escola).concat("!")); // Escola Cod3r!
console.log(escola.replace(3, "e")); // Coder
console.log('Ana,Maria,Pedro'.split(",")); // [ 'Ana', 'Maria', 'Pedro' ]