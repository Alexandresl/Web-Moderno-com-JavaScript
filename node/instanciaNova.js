// Uma factory retorna um novo objeto (instância)
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}