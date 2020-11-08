console.log(Math.ceil(6.1)); // Imprime 7

const obj1 = {};
obj1.nome = 'Bola';
// obj1['nome'] = 'Bola'; // equivalente ao exemplo anterior
console.log(obj1.nome); // Imprime Bola

function Obj(nome) {
    this.nome = nome;
    this.falaNome = function() {
        console.log(nome);
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');

console.log(obj2.nome); // Imprime Cadeira
console.log(obj3.nome); // Imprime Mesa
obj3.falaNome(); // Imprime Mesa