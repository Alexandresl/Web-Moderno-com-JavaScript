const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function (nome, index) {

    console.log(`${index + 1}) ${nome}`)

})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)

aprovados.forEach(exibirAprovados)