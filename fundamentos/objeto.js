const prod1 = {};

console.log(typeof prod1);

prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.90;
prod1["desconto legal"] = 0.4; // Evitar pois é escroto

console.log(prod1);

const prod2 = {
	nome: "Camisa Polo",
	preco: 79.90,
	obj: {
		blablabla: 1,
		obj: {
			blablabla: 2
		}
	}
}

console.log(prod2);