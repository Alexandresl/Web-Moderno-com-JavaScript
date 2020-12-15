// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar função de forma literal
function fun1() {

}

// Armazenar função em uma variável
const fun2 = function () {

}

// Armazenar função em um array
const array = [function (a,b) { return a + b}, fun1, fun2];
console.log(array[0](2, 3)); // 5

// Armazenar em atributo de objetos
const obj = {};
obj.falar = function () { return 'Opa!' }
console.log(obj.falar()); // Opa!

// Passar função como parâmetro
function run(fun) {
    fun();
}

run(function() { console.log('Executando...'); }); // Executando

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(4); // 9
/**
 * A função soma também poderá ser executada 
 * armazenando em uma variável
 */
const duasParcelas = soma(2, 3);
duasParcelas(4); // 9