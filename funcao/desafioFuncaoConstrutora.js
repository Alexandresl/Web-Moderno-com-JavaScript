;class Passoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Passoa('João');
p1.falar();