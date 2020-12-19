const valor = 'Global';

function minhaFuncao() {
    console.log(valor);
}
minhaFuncao(); // Global

function exec() {
    const valor = 'Local';
    minhaFuncao();
}

exec(); // Global