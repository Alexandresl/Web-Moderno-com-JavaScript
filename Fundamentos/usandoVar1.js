{
    {
        {
            {
                var sera = 'Será???';
            }
        }
    }
}
/**
 * A variável mesmo estando dentro de um bloco poderá ser acessada fora dele
 */
console.log(sera); // Será???

function teste() {
    var local = 123;
}
/**
 * A variavel declarada dentro da função estará visível apenas na função
 */
// console.log(local); // Gera erro