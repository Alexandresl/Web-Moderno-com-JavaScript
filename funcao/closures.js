 // Contexto léxico em ação!

const x = "Global";

function fora() {
    const x = "Local";
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao()); // Local