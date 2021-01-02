// Criando uma Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // undefined A B C

Object.prototype.attr0 = 0; // Não faça isso em casa!
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // 0 A B C

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
          if (this.velAtual + delta <= this.velMax) {
              this.velAtual += delta;
          } else {
              this.velAtual = this.velMax;
          }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, // shadowing (sombreamento do atributo do pai)

}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari); // { modelo: 'F40', velMax: 324 }
console.log(volvo); // { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());