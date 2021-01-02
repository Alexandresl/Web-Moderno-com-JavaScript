const sequencia = {
    _valor: 1, // convenção
    get valor() {
        return this._valor++;
    },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor;
        }
    }
}

console.log(sequencia.valor, sequencia.valor); // 1, 2
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor); // 1000 1001
sequencia.valor = 900; // Não modifica o valor do atributo devido a validação do set
console.log(sequencia.valor, sequencia.valor); // 1002 1003