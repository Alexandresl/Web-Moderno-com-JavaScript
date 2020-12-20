function Pessoa (nome) {
    this.nome = nome;
    this.falar = function () {
        console.log(`Meu nome é ${nome}`);
    }
}

const p = new Pessoa('João');
p.falar();
