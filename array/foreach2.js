Array.prototype.forEach2 = function(callback) {

    for (let i = 0; i < this.length; i++) {

        callback(this[i], i, this)

    }

}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function (nome, index) {

    console.log(`${index + 1}) ${nome}`)

})