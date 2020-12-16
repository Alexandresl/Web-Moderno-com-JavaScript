function Pessoa() {
    this.idade = 0;
    /**
     * Aqui criamos um atributo self que irá
     * sempre apontar para o objeto pessoa.
     * Assim substituímos a palavra reservada
     * this por self para que possamos chamar
     * em diferentes contextos a função
     * sem a perda de contexto
     */
    const self = this;
    setInterval(function() {
        self.idade++
        console.log(self.idade);
    }/*.bind(this)*/, 1000);
}

new Pessoa;