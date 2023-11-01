console.log(Math.ceil(6.1));

const obj1 = {}
const obj2 = {}
obj1.nome = "Bola";
obj2['nome'] = "Bola2";

console.log(obj1.nome);
console.log(obj2.nome);

function Obj(nome) {
	this.nome = nome;
	this.exec = function () {
		console.log("Exec...");
	}
}

const obj3 = new Obj("Maria");
const obj4 = new Obj("João");

console.log(obj3.nome);
console.log(obj4.nome);
obj4.exec()