/**
 * Podemos criar objetos:
 */

// Usando a notação literal
const obj1 = {}
console.log(obj1);

// Usando o Object
const obj2 = new Object();
console.log(obj2);

// Usando funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
    /**
     * Nesta função apenas podemos acessar externamente
     * o atributo nome, o prco e o desconto, uma vez
     * determinados não podem ser modificados.
     */
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Usando uma Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

// Usando o Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Usando uma função conhecida que retorna objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON!"}');
console.log(fromJSON);