let a = 7;
let b = 94;

let temp = a;
a = b;
b = temp;

// Depois da troca... a = 94 e b = 7
// [a, b] = [b, a]

console.log("a = " + a);
console.log("b = " + b)