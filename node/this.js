console.log(this === global); // false
console.log(this === module); // false
console.log(this === module.exports); // verdadeiro
console.log(this === exports); // verdadeiro

function logThis() {
    console.log('Dentro de uma função...');
    console.log(this === exports); // false
    console.log(this === module.exports); // false
    console.log(this === global); // true
}

logThis();