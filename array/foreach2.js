Array.prototype.meuForEach = function (callback) {
   for (let i = 0; i < this.length; i++) {
       callback(this[i], i, this);
   }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.meuForEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`);
});

/**
 * Saída
 * 
 * 1) Agatha
 * 2) Aldo
 * 3) Daniel
 * 4) Raquel
 */