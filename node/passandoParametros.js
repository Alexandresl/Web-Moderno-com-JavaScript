module.exports = function(...nomes) {
    return nomes.map(nome => {
        return `Boa semana ${nome}`
    })
}