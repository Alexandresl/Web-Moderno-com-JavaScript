# Web-Moderno-com-JavaScript

## Seção 1 - Introdução Curso Desenvolvimento Web

### 1. Visão geral do Curso Desenvolvimento Web

#### Cronograma

01. Visão Geral
02. Configuração de Ambiente
03. Fundamentos
04. Estruturas de controle
05. Funções
06. Objetos e OO
07. Array
08. Node
09. ES Next... 6, 7, 8
10. Fundamentos da Web
11. HTML
12. CSS
13. DOM
14. Ajax
15. Gulp
16. Webpack
17. jQuery
18. Bootstrap
19. React
20. Vue
21. Angular
22. Bando de Dados Relacionais
23. Banco de dados Não Relacionais
24. Express
25. Integrando Banco de Dados com o Backend
26. Projetos
27. Outros Tópicos
28. Conclusão

### 2. Repositório do curso

[Github do curso](https://github.com/cod3rcursos/web-moderno)

### 3. Importância dos Fundamentos

### 4. Por que aprender javascript?

## Seção 2: Configuração do Ambiente

### 5. Instalação Node ( Mac )

[Download node](https://nodejs.org/pt-br/)

### 6. Configuração do Editor (VSCode)

[Download VSCode](https://code.visualstudio.com/)

* Instalado o plugin Code Renner

### 7. Configuração do Comando 'code'

* É possível abilitar o comando clicando: Ctrl + Shift + P e selecionando "Shell Command: Install 'code' command in PATH"

### 8. Instalação do VSCode (Windows)

## Seção 3: JavaScript: Fundamento

### 9. Visão geral de Algoritmo

* Sequência de passos finitos que executa uma ação, pode ter repetições.
* As repetições poderão ser por uma quantidade definida de vezes, ou então, até que uma condição seja satisfeita.
* Os algoritmos permitem também que um passo, ou uma quantidade finita de passos, seja realizado, em detrimento de outro passo, ou quantidade de passos, dependendo de alguma condição.
* O algoritmo é o verbo, as ações que serão processadas a partir dos dados fornecidos.

### 10. Visão geral da Estrutura de Dados

* As estruturas de dados visam organizar, administrar ou manipular os dados de uma aplicação.

### 11. Configuração do projeto

### 12. Organização Básica de um Código JS

[Arquivo](Fundamentos/organizacao.js)

```javascript
// O Código JavaScript organizado em sentenças de código
console.log("Sentença de código");

// Em blocos de código

{
    /**
     * Este é um bloco de código
     * Este código poderá conter uma ou várias sentenças
     */
    console.log("Olá");
    console.log("Mundo!");
}
```

### 13. Executando JavaScript

* Algumas alternativas para executar JavaScript:
    * [repl](https://repl.it/) - Editor on-line
    * [JSFIDDLE](https://jsfiddle.net/) - Editor on-line
    * Console do Browser - F12 para o Chrome
    * Terminal do VSCode - Ctrl + Shift + '
    * Plugin Code Runner do VSCode - Ctrl + Alt + N

### 14. Comentários de código

[Arquivo](Fundamentos/comentario.js)

```javascript
// Comentário de uma linha
console.log("Linha 1");

/**
 * Comentário de 
 * múltiplas linhas
 */
console.log("Linha 2");
```

### 15. O Básico de Var, Let e Const

* De forma resumido e simplista, a programação pode ser resumida em processamento e dados. Você tem dados que são processados e geram outros dados. O processamento ocorre por meio de algorítmos e os dados são organizados em estruturas de dados.
* Em JavaScript podemos declarar variáveis com ```var``` ou ```let``` e constantes com a palavra reservada ```const```

[Arquivo](Fundamentos/variaveisEConstantes.js)

```javascript
var a = 3;
let b = 4;

/**
 * Redeclarar a "var a", embora
 * não gere erro, não é uma boa 
 * prática.
 * 
 * Já o let não permite ser 
 * redeclarado.
 */
var a = 30;
b = 40;

console.log(a, b); // Saída: 30 40

a = 300;
b = 400;

console.log(a, b); // Saída: 300 400

const c = 5; // Neste caso não é permitido modificar o valor

console.log(c); // Saída: 5
```

### 16. Tipagem Fraca

* **JavaScript** é uma linguagem de **tipagem dinâmica** ou **fracamente tipada**. Isso significa que não é preciso especificar que tipo de dado a variável vai conter. Além disso uma variável poderá conter dados de tipos diferentes ao longo da execução de um programa.
* Importante atentar para que, apesar de não ser fortemente tipada, as variáveis em JavaScript possuem tipos. Esses tipos podem ser verificados usando o comando ```tipeof```.

[Arquivo](Fundamentos/tipagemFraca.js)

```javascript
let qualquer = 'legal';

console.log(qualquer);
console.log(typeof qualquer);

qualquer = 3.1516;
console.log(qualquer);
console.log(typeof qualquer);

// Evitar nome genéricos e siglas

let valor = '';
let numero = 1;
let pqp = false; // Produto Quimico Perigoso... kkk
```

### 17. Tipos em JavaScript: Number

[Arquivo](Fundamentos/numeros.js)

```javascript
const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2); // 1, 2
console.log(Number.isInteger(peso1)); // true
console.log(Number.isInteger(peso2)); // true

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); // 7.87
console.log(media.toString()); // 7.8709999999999996
console.log(media.toString(2)); // retorna o valor em binário - 111.11011110111110011101101100100010110100001110010101
console.log(typeof media); // number
console.log(typeof Number); // function
```

### 18. Number: Alguns cuidados

[Arquivo](Fundamentos/numerosAlgunsCuidados.js)

```javascript
console.log(7 / 0); // Infinity
console.log("10" / 2); // 5
console.log("Show!" * 2); // NaN
console.log(0.1 + 0.7); // 0.7999999999999999
console.log((10.345).toFixed(2)); // 10.35
```

### 19. Usando Math

[Arquivo](Fundamentos/math.js)

```javascript
const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(area.toFixed(2)); // 98.52
console.log(typeof Math); // object

/**
 * A partir do ecmaScript 2016 ganhamos o
 * operador de exponenciação (**), simplificando
 * este tipo de operação
 */
console.log((Math.PI * raio ** 2).toFixed(2)); // 98.52
```

### 20. Tipos em JavaScript: String

* Uma String em JavaScript pode ser limitada por três símbolos:
    * ```'Aspas Simples'```
    * ```"Aspas Duplas"```
    * ``` `Backtick` ```

[Arquivo](Fundamentos/strings.js)

```javascript
const escola = "Cod3r";

console.log(escola.charAt(4)); // r
console.log(escola.charAt(5)); // 
console.log(escola.charCodeAt(3)); // 51
console.log(escola.indexOf(3)); // 3
console.log(escola.substring(1)); // od3r
console.log(escola.substring(0, 3)); // Cod
console.log("Escola ".concat(escola).concat("!")); // Escola Cod3r!
console.log("Escola " + escola + "!"); // Escola Cod3r!
console.log(escola.replace(3,"e")); // Coder
console.log('Ana,Maria,Pedro'.split(",")); // [ 'Ana', 'Maria', 'Pedro' ]
```

### 21. Usando Template String

* Recurso disponível a partir do EcmaScript 2015.
* O Template String converte a variável dentro do texto, recurso que chama-se interpolação.

[Arquivo](Fundamentos/templateString.js)

```javascript
const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';

console.log(concatenacao);

const template = `Olá
${nome}!`

console.log(template);

// Expressões...

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();

console.log(`Ei... ${up("Cuidado")}!`);
```

### 22. Tipos em JavaScript: Boolean

[arquivo](Fundamentos/booleanos.js)

```javascript
let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('Os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'Texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('pra finalizar...');
console.log(!!('' || null || 0 || ' '));
```

### 23. Tipos em JavaScript: Array

* Em JavaScript um Array é heterogênio e com tamanho flexível
* Para pegarmos o tamanho de um array, utilizamos a propriedade ```length```
* Para incluírmos dados em um array, utilzamos o método ```push()```
* Para retirarmos o último elemento e retornarmos este elemento, utilizamos o método ```pop()```
* Para retirarmos um elemento de qualquer posição do array utilizamos o ```delete array[posicao]```

[Arquivo](Fundamentos/arrays.js)

```javascript
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); // 7.7 9.2
console.log(valores[4]); // undefined

valores[4] = 10;
console.log(valores); // [ 7.7, 8.9, 6.3, 9.2, 10 ]
console.log(valores.length); // 5
valores.push({id: 3}, false, null, 'teste') // Evitar arrays heterogênios
console.log(valores); // [ 7.7, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null, 'teste']

console.log(valores.pop()); // teste
delete valores[0];
console.log(valores); // [ <1 empty item>, 8.9, 6.3, 9.2, 10, { id: 3 }, false, null ]

console.log(typeof valores); // object
```

### 24. Tipos em JavaScript: Object

* Objetos em JavaScript é um conjunto de chave / valor

[Arquivo](Fundamentos/objeto.js)

```javascript
const prod1 = {};

prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // Evitar atributos com espaço

console.log(prod1); // { nome: 'Celular Ultra Mega', preco: 4998.9, 'Desconto Legal': 0.4 }

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    'Desconto Legal': 0.30 // Evitar!
}

console.log(prod2); // { nome: 'Camisa Polo', preco: 79.9, 'Desconto Legal': 0.3 }
```

### 25. Entendendo o Null e Undefined

*  No JavaScript, atribuições de tipos primitivos são feitos por valor, e de objetos é por referência, neste caso a variável armazena o endereço de memória onde encontra-se armazenado o objeto.
* uma variável não inicializada, apenas declarada, recebe o valor de ```undefined```.
* Já o ```null```significa ausência de valor. A variável não contêm nenhum valor e não aponta para nenhum endereço de memória.
* Evitar setar diretamente o ```undefined```, deixe este valor apenas para as variáveis que não tiveram seu valor ainda definido, utilizar o ```null``` para o caso de querer "limpar" o valor de uma variável.

[Arquivo](Fundamentos/nullUndefined.js)

```javascript
let valor; // variável não inicializada
console.log(valor); // undefined

valor = null; // ausência de valor
console.log(valor); // null

const produto = {};
console.log(produto.preco); // undefined
console.log(produto);
produto.preco = 3.50;
console.log(produto);

produto.preco = null; // utilizar o null
console.log(!!produto.preco); // false
console.log(produto); // { preco: null }
```

### 26. Quase tudo é função

* As funções exercem um papel central no JavaScript.

[Arquivo](Fundamentos/funcaoEmQuaseTudo.js)

```javascript
console.log(typeof Object); // function

class Produto {}
console.log(typeof Produto); // function
```

### 27. Exemplos Básicos de Funções #01

[Arquivo](Fundamentos/funcao1.js)

```javascript
// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); // 5
/**
 * No caso de não passarmos um segundo parâmetro,
 * ele irá assumir o valor de undefinec, assim o
 * resultado de um numero com undefined é NaN
 */
imprimirSoma(2) // NaN
/**
 * Caso seja colocado um número maior de parâmetros,
 * os valores "Extras" serão ignorados
 */
imprimirSoma(2, 10, 4, 5, 6, 7, 8); // 12
/**
 * Caso não seja passado nenhum parâmetro, os
 * dois assumirão o valor undefined e a soma
 * terá como resultado o NaN.
 */
imprimirSoma(); // NaN

// Função com retorno
function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2, 3)); // 5
console.log(soma(2)); // 3
console.log(soma()); // NaN
```

### 28. Exemplos Básicos de Funções #02

[Arquivo](Fundamentos/funcao2.js)

```javascript
// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}
imprimirSoma(2, 3); // 5

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}
console.log(soma(3, 5)); // 8

// Runção Arrow com retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(10, 4)); // 6
```

### 29. Declaração de variáveis com Var #01

* As variáceis declaradas com var ficam visíveis fora do bloco em que foram declaradas, exceto se for em funções.
* Em resumo as variáveis declaradas com var possuem apenas dois escopos, o escopo global e o escopo de função.

[Arquivo](Fundamentos/usandoVar1.js)

```javascript
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
```

### 30. Declaração de Variáveis com Var #02

[Arquivo](Fundamentos/usandoVar2.js)

```javascript
var numero = 1;
{
    var numero = 2;
    console.log("Dentro: ", numero); // Dentro:  2
}
console.log("Fora: ", numero); // Fora:  2
```

### 31. Declaração de Variáveis Com Let

* As variáveis declaradas com ```let``` e as constantes declaradas com ```const``` possuem escopo global, escopo de bloco e escopo de função.

[Arquivo](Fundamentos/usandoLet1.js)

```javascript
var numero = 1;
{
    let numero = 2;
    console.log("Dentro: ", numero); // Dentro:  2
}
console.log("Fora: ", numero); // Fora:  1
```

### 32. Usando Var em Loop #01

[Arquivo](Fundamentos/usandoVarEmLoop1.js)

```javascript
for (var i = 0; i < 10; i++) {
    console.log(i); // imprime de 0 a 9
}

console.log("i = ", i); // i =  10
```

### 33. Usando Let em Loop #01

[Arquivo](Fundamentos/usandoLetEmLoop1.js)

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i); // imprime de 0 a 9
}

console.log("i = ", i); // Gera erro pois o i só estará disponível no laço
```

### 34. Usando Var em Loop #02

[Arquivo](Fundamentos/usandoVarEmLoop2.js)

```javascript
const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function(){ console.log(i); });
}

funcs[2](); // 10
funcs[8](); // 10
```

### 35. Usando Let em Loop #02

[Arquivo](Fundamentos/usandoLetEmLoop2.js)

```javascript
const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function(){ console.log(i); });
}

funcs[2](); // 2
funcs[8](); // 8
```

### 36. Entendendo o Hoisting

* Quando declaramos uma variável com a palavra ```var```ela sofre o *hoisting* ou *içamento*. Na prática, esta variável ela será declarada no início da execução (seja na função ou global) embora a atribuição ocorra na ordem sequencial do programa.
* O ```let``` não sofre este efeito!

```javascript
console.log('a = ', a); // a =  undefined
var a = 2; // a atribuição ocorre aqui!
console.log('a = ', a); // a =  2

// Na prática, o que é executado é
var a2;
console.log('a2 = ', a2); // a2 =  undefined
a2 = 2; // a atribuição ocorre aqui!
console.log('a2 = ', a2); // a2 =  2
```

### 37. Função Vs Objeto

[Arquivo](Fundamentos/objeto2.js)

```javascript
console.log(typeof Object); // function
console.log(typeof new Object); // object

const Cliente = function () {};
console.log(typeof Cliente); // function
console.log(typeof new Cliente); // object

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto); // function
console.log(typeof new Produto); // object
```

### 38. Par Nome/Valor

[Arquivo](Fundamentos/parNomeValor.js)

```javascript
// par nome/valor
const saudacao = 'Opa'; // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa'; // contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legtal',
        numero: 123
    }
}

console.log(saudacao); // Opa
console.log(exec()); // Falaaa
console.log(cliente); // { nome: 'Pedro', idade: 32, peso: 90, endereco: { logradouro: 'Rua Muito Legtal', numero: 123 } }
```

### 39. Notação Ponto

[Arquivo](Fundamentos/notacaoPonto.js)

```javascript
console.log(Math.ceil(6.1)); // 7

const obj1 = {};
obj1.nome = 'Bola';
console.log(obj1.nome); // Bola

function Obj(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome); // Cadeira
console.log(obj3.nome); // Mesa
obj3.exec(); // Exec...
```

### 40. Operadores: Atribuição

[Arquivo](Fundamentos/atribuicao.js)

```javascript
const a = 7;
let b = 3;

b += a; // b = b + a
console.log(b); // 10

b -=4; // b = b - 4
console.log(b); // 6

b *= 2; // b = b * 2
console.log(b); // 12

b /= 2; // b = b / 2
console.log(b); // 6

b %= 2 // b = b % 2
console.log(b); // 0
```

### 41. Operadores: Destructuring #01

* Introduzido no JavaScript no ES2015 (ES6), o Destructuring é um operador de desestruturação.
* utilizado para Objetos com a utilização de parênteses "{}" e arrays com a utilização do colchete "[]". 

[Arquivo](Fundamentos/destructuring1.js)

```javascript
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade); // Ana 5

const { nome: n, idade: i } = pessoa;
console.log(n, i); // Ana 5

const { sobrenome, bemHumorada  = true } = pessoa;
console.log(sobrenome, bemHumorada); // undefined true

const { endereço: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep); // Rua ABC 1000 undefined
```

### 42. Operadores: Destructuring #02

[Arquivo](Fundamentos/destructuring2.js)

```javascript
const [ a ] = [10];
console.log(a); // 10

const [ n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6); // 10 9 undefined 0

const [ , [ , nota]] = [ [ , 8, 8 ], [9, 6, 8] ];
console.log(nota); // 6
```

### 43. Operadores: Destructuring #03

* Podemos usar o destructuring já nos parâmetros de uma função.

[Arquivo](fundamentos/destructuring3.js)

```javascript
function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { max: 50, min: 40 };
console.log(rand(obj)); // número randomico entre 40 e 50
console.log(rand({ min: 955 })); // número randomico entre 955 e 1000
console.log(rand({})); // número randomico entre 0 e 1000
```

### 44. Operadores: Destructuring #04

[Arquivo](Fundamentos/destructuring4.js)

```javascript
function rand( [min = 0, max = 1000] ) {
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand([50, 40])); // Retorno números entre 40 e 50
console.log(rand([992])); // Retorno números entre 992 e 1000
console.log(rand([, 10])); // Retorno números entre 0 e 10
console.log(rand([])); // Retorno números entre 0 e 1000
```

### 45. Operadores: Aritméticos

* Os operadores aritméticos são operadores binários.

[Arquivo](Fundamentos/aritmeticos.js)

```javascript
const [a, b, c, d] = [3, 5, 1, 15];

const soma = a + b + c + d;
const subtracao = d - b;
const multiplicacao = a * b;
const divisao = d / a;
const modulo = a % 2;

console.log(soma, subtracao, multiplicacao, divisao, modulo); // 24 10 15 5 1
```

### 46. Operadores: Relacionais

* O resultado de expressões com os operadores relacionais sempre resultara em ```true``` ou ```false```.
* quando utilizado ```===``` ou o ```!==``` significa que estamos avaliando se os valores e os tipos são iguais.

```javascript
console.log('01)', '1' == 1); // 01) true
console.log('02)', '1' === 1); // 02) false
console.log('03)', '3' != 3); // 03) false
console.log('04)', '3' !== 3); // 04) true
console.log('05)', 3 < 2); // 05) false
console.log('06)', 3 > 2); // 06) true
console.log('07)', 3 <= 2); // 07) false
console.log('08)', 3 >= 2); // 08) true

const d1 = new Date(0);
const d2 = new Date(0);

console.log('09)', d1 === d2); // 09) false
console.log('10)', d1 == d2); // 10) false
console.log('11)', d1.getTime() === d2.getTime()); // 11) true
console.log('12)', undefined == null); // 12) true
console.log('13)', undefined === null); // 13) false

```

### 47. Operadores: Lógicos

## tabelas verdades

P | Q | P *E* Q
--|---|----------
V | V | V
V | F | F
F | V | F
F | F | f

P | Q | P *ou* Q
--|---|----------
V | V | V
V | F | V
F | V | V
F | F | f

P | Q | P *XOR* Q
--|---|----------
V | V | F
V | F | V
F | V | V
F | F | f

P | ~P
--|---
V | F 
F | V 

* O **OU exclusivo** pode ser simulado com o operador de diferente ```!=``` apesar de existir o operador bitwise (^) - Operador bit a bit, este é mais indicado para situações de comparação entre valores numéricos.

[Arquivo](fundamentos/logicos.js)

```javascript
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    // const comprarTV32 = !!(trabalho1 ^ trabalho2); // Não recomendado
    const comprarTV32 = trabalho1 != trabalho2; // Não recomendado
    const manterSaudável = !comprarSorvete;

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudável }
}

console.log(compras(true, true)); // { comprarSorvete: true, comprarTV50: true, comprarTV32: false, 'manterSaudável': false }
console.log(compras(true, false)); // { comprarSorvete: true, comprarTV50: false, comprarTV32: true, 'manterSaudável': false }
console.log(compras(false, true)); // { comprarSorvete: true, comprarTV50: false, comprarTV32: true, 'manterSaudável': false }
console.log(compras(false, false)); // { comprarSorvete: false, comprarTV50: false, comprarTV32: false, 'manterSaudável': true }
```

### 48. Operadores: Unários

[Recurso adicional](assets/pdf/O+operador+de+exponenciação..pdf)

[Arquivo](Fundamentos/unarios.js)

```javascript
let num1 = 1;
let num2 = 2;

// pós-fixada
num1++;
console.log(num1); // 2
// pré-fixada
--num1;
console.log(num1); // 1

console.log(++num1 === num2--); // true
console.log(num1 === num2); // false
```

### 48. Operadores: Ternários

[Arquivo](Fundamentos/ternario.js)

```javascript
// Fora mais reduzida com arrow function
// const resultado2 = nota => nota >= 7 ? 'Aprovvado' : 'Reprovado';

// Forma mais completa com arrow function
const resultado = (nota) => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado';
}

console.log(resultado(7.1)); // Aprovado
console.log(resultado(6.1)); // Reprovado
```

### 50. Contexto de Execução: Browser vs Node

* É importante ter conciência ao programarmos com JavaScript sobre o Runtime, ou seja, se estaremos executando o JavaScript no Browser ou no Node, por exemplo.
* No Browser nós temos um objeto global neste runtime que é chamado de ```window```. Outra forma de acessarmos este objeto no contexto do Browser é com a palavra reservada ```this```.
* Variáveis globais declaradas com a palavra reservada ```var```, podem ser acessadas pelo objeto ```window```. Variáveis globais declaradas com o ```let``` ou com o ```const``` não estarão acessíveis a partir do objeto ```window```.
```javascript
// Exemplo no contexto do browser
var a = "Texto";
window.a; // Texto
this.a // Texto

let b = 123;
window.b; // undefined
this.b; // undefined
b; // 123
```
* funções nomeadas declaradas globalmente poderão ser acessadas a partir do objeto ```window```, assim como funções atribuídas a uma variável declarada com a palavra reservada ```var```. funções atribuídas a variáveis (```let``` ou ```const```) não estarão acessíveis pelo objeto ```window```

```javascript
function f1 () {
    return this === window
}

var f2 = () => console.log(this === window);

let f3 = () => console.log(this === window);

window.f1; // true
this.f1(); // true

window.f2; // true
this.f2(); // true

window.f3; // undefined
this.f3(); // undefined
```

### 51. Tratamento de Erro (Try / Catch / Throw)

[Arquivo](Fundamentos/erro.js)

```javascript
function tratarErroELancar(erro) {
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (e) {
        tratarErroELancar(e);
    }  finally {
        console.log("Final");
    } 
}

const obj = { nome: "Roberta" };

imprimirNomeGritado(obj);
/**
 * Final
 * 
 * c:\Users\Alexandre\dev\Web-Moderno-com-JavaScript\Fundamentos\erro.js:2
 *  throw {
 *  ^
 * {
 *  nome: 'TypeError',
 *  msg: "Cannot read property 'toUpperCase' of undefined",
 *  date: 2020-12-13T16:53:07.021Z
 * }
 */
```

### 52. Recursos

[Arquivo](assets/pdf/Note+Jun+13,+2018.pdf)

## Seção 4: Javascript: Estruturas de Controle

### 53. Visão Geral do Capítulo

### 54. Usando a Estrutura IF #01

[Arquivo](Controle/if1.js)

```javascript
function soBoaNoticia (nota) {
    if (nota >= 7) {
        console.log(`Aprovado com ${nota}`);
    }
}

soBoaNoticia(8.1); // Aprovado com 8.1
soBoaNoticia(6.1); // Não imprime nada

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log(`É verdade... ${valor}`);
    }
}

seForVerdadeEuFalo(); // Não imprime nada
seForVerdadeEuFalo(null);  // Não imprime nada
seForVerdadeEuFalo(undefined);  // Não imprime nada
seForVerdadeEuFalo(NaN);  // Não imprime nada
seForVerdadeEuFalo("");  // Não imprime nada
seForVerdadeEuFalo(0);  // Não imprime nada
seForVerdadeEuFalo(-1);  // É verdade... -1
seForVerdadeEuFalo(' '); // É verdade... 
seForVerdadeEuFalo('?'); // É verdade... ?
seForVerdadeEuFalo([]); // É verdade... 
seForVerdadeEuFalo([1, 2]); // É verdade... 1,2
seForVerdadeEuFalo({}); // É verdade... [object Object]
```

### 55. Usando a Estrutura IF #02

[Arquivo](Controle/if2.js)

```javascript
function teste1(num) {
    if (num > 7)
        console.log(num);
        console.log("Final");
}

teste1(6); // Final
teste1(8); // 8 Final

function teste2(num) {
    if (num > 7); { // Cuidado com o ponto e vírgula
        console.log(num);
    }
}

teste2(6); // 6
teste2(8); // 8
```

### 56. Usando a Estrutura IF/ELSE

[Arquivo](Controle/ifElse.js)

```javascript
const imprimirResultado = function(nota) {
    if (nota >=7) {
        console.log('Aprovado!');
    } else {
        console.log("Reprovado!");
    }
}

imprimirResultado(10); // Aprovado
imprimirResultado(4); // Reprovado
imprimirResultado("Epa!"); // Reprovado - Cuidado!!!
```

### 57. Usando a Estrutura IF/ELSE IF...

[Arquivo](Controle/ifElseIf.js)

```javascript
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra');
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado');
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação');
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado');
    } else {
        console.log('Nota inválida');
    }
}

imprimirResultado(10);  // Quadro de Honra
imprimirResultado(8.9);  // Aprovado
imprimirResultado(6.55);  // Recuperação
imprimirResultado(2.3);  // Reprovado
imprimirResultado(-1);  // Nota inválida
imprimirResultado(11);  // Nota inválida
```

### 58. Usando a Estrutura SWITCH

[Arquivo](Controle/switch.js)

```javascript
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra');
            break; 
        case 8:
        case 7:
            console.log('Aprovado');
            break;
        case 6:
        case 5:
        case 4:
            console.log('Recuperação');
            break;
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado');
            break;
        default:
            console.log('Nota inválida');
    }
}

imprimirResultado(10) // Quadro de Honra
imprimirResultado(8.9) // Aprovado
imprimirResultado(6.55) // Recuperação
imprimirResultado(2.3) // Reprovado
imprimirResultado(-1) // Nota inválida
imprimirResultado(11) // Nota inválida
```

### 59. Usando a Estrutura WHILE

* Usada normalmente para situações em que temos uma quantidade indeterminada de repetições.

[Arquivo](Controle/while.js)

```javascript
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}`);
}

console.log('Até a próxima');
```

### 60. Usando a Estrutura DO/WHILE

[Arquivo](Controle/doWhile.js)

```javascript
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = 0;

do {
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`Opção escolhida foi ${opcao}`);
} while (opcao != -1);

console.log('Até a próxima');
```

### 61. Usando a Estrutura FOR

[Arquivo](Controle/for1.js)

```javascript
let contator = 1;

while (contator <= 10) {
    console.log("Contador =",contator);
    contator++;
}

// Laço for equivalete ao while
for (let i = 1; i <=10; i++) {
    console.log("Contador =", i);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for ( let i = 0; i < notas.length; i++) {
    console.log(`Notas = ${notas[i]}`);
}
```

### 62. Usando a Estrutura FOR/IN

[Arquivo](Controle/for2.js)

```javascript
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

for (let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}
```

### 63. Usando Break/Continue

* O ```break``` e o ```continue``` são palavras reservadas que geram um desvio de fluxo.
* O ```break``` pode ser usado dentro de um laço ```switch```, ```while``` ou ```for```. Não causa impacto em um bloco ```ìf```.
* O ```continue```funciona em um laço ```for``` e um laço ```while```.
* Enquanto o ```break``` interrompe a execução e sai do laço (```switch```, ```while``` ou ```for```) o ```continue``` interrompe apenas a execução do laço (```for``` ou ```while```), "pulando" para o próximo teste lógico.
* O uso destes desvios devem ser evitados.
* Podemos ainda atribuir rótulos aos laços, conforme demonstrado no exemplo abaixo:

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x in nums) {
    if (x == 5) {
        break;
    }
    console.log(`${x} = ${nums[x]}`);
}

/**
 * Saída com o break;
 * 
 * 0 = 1
 * 1 = 2
 * 2 = 3
 * 3 = 4
 * 4 = 5
 */

for (let y in nums){
    if (y == 5) {
        continue;
    }
    console.log(`${y} = ${nums[y]}`);
}

/**
 * Retorno com o continue
 * 
 * 0 = 1 
 * 1 = 2 
 * 2 = 3 
 * 3 = 4 
 * 4 = 5 -> aqui ele pula o índice 5
 * 6 = 7 
 * 7 = 8 
 * 8 = 9 
 * 9 = 10
 */


 /**
  * Atribuindo um rótulo ao laço.
  * neste caso, o break interno irá afetar o laço
  * definido pelo rótulo "esterno:" e não ao laço
  * em for mais interno como seria o comportamento
  * padrão
  */

 externo: 
 for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) {
            break externo;
        }
        console.log(`Par: ${a} - ${b}`);
    }
 }

 /**
  * Saída do laço anterior
  * 
  * Par: 0 - 0
  * Par: 0 - 1
  * Par: 0 - 1
  * Par: 0 - 1
  * Par: 0 - 2
  * Par: 0 - 3
  * Par: 0 - 4
  * Par: 0 - 5
  * Par: 0 - 6
  * Par: 0 - 7
  * Par: 0 - 8
  * Par: 0 - 9
  * Par: 1 - 0
  * Par: 1 - 1
  * Par: 1 - 2
  * Par: 1 - 3
  * Par: 1 - 4
  * Par: 1 - 5
  * Par: 1 - 6
  * Par: 1 - 7
  * Par: 1 - 8
  * Par: 1 - 9
  * Par: 2 - 0
  * Par: 2 - 1
  * Par: 2 - 2
  */
```

## Seção 5: Javascript: Função

### 64. Cidadão de Primeira Linha

* As funções são muito importantes para o JavaScript. A linguagem permite utilizar as funções de muitas formas, tornando este recurso estremamente poderoso.
* Em JavaScript, podemos tratar função como dado, assim podemos passar uma função como parâmetro, armazenar em uma variável, retornar uma função em outra função. Isto quebra um pouco o que tínhamos como separado, dados e algorítmos para tratar estes dados.
* Em JavaScript, toda a função retorna um valor, caso não seja declarada de forma explicita um valor a ser retornado, será returnado o valor ```undefined```.

[Arquivo](funcao/cidadaoPrimeiraClasse.js)

```javascript
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
```

### 65. Parâmetros e Retorno São Opcionais

* Os parâmetros em uma função no JavaScript são opcionais. Mesmo que esteja definido que uma função espera uma quantidade de parâmetros, você poderá invocar a função sem passar nenhum parâmetro, ou passando um número maior de parâmetros.
* Os retornos também são opcionais. Na declaração de uma função não é necessário definir se haverá ou não retorno, então uma mesma função poderá ora retornar algum valor especificado e ora não retornar (conforme dito anteriormente, não havendo valor definido, irá retornar o ```undefined```).

[Arquivo](funcao/paramsERetornoSaoOpcionais.js)

```javascript
function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`);
    } else {
        return area;
    }
}

console.log(area(2, 2)); // 4
console.log(area(2)); // NaN
console.log(area()); // NaN
console.log(area(2, 3, 17, 22, 44)); // 6
console.log(area(5, 5,)); // imprime "Valor acima do permitido: 25m2" e retorna undefined
```

### 66. Parâmetros variáveis

* Em JavaScript, mesmo em funções sem declaração de parâmetros, podemos invocar passando parâmetros e recuperar estes valores através da palavra reservada ```arguments```.

[Arquivo](funcao/paramsVariaveis.js)

```javascript
function soma() {
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma()); // 0
console.log(soma(1)); // 1
console.log(soma(1.1, 2.2, 3.3)); // 6.6
console.log(soma(1.1, 2.2, 'teste')); // 3.3000000000000003teste
console.log(soma('a', 'b', 'c')); // 0abc
```

### 67. Parâmetro Padrão

* O recurso de parâmetro padrão foi adicionado ao JavaScript na versão ES2015.

[Arquivo](funcao/paramPadrao.js)

```javascript
// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    /**
     * caso o valor booleano da variável seja false, 
     * irá receber o valor 1.
     */
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1()); // 3
console.log(soma1(3)); // 5
console.log(soma1(1, 2, 3)); // 6
console.log(soma1(0, 0, 0)); // 3 - CUIDADO!!!

/**
 * estratégia 2, 3 e 4 para gterar valor padrão com o
 * uso de ternário
 */

function soma2(a, b, c) {
    a = a !== undefined ? a : 1; // com o undefined
    b = 1 in arguments ? b : 1; // pegando a posição em arguments
    c = isNaN(c) ? 1 : c; // verificando se não é um number - MELHOR ALTERNATIVA
    return a + b + c;
}

console.log(soma2()); // 3
console.log(soma2(3)); // 5
console.log(soma2(1, 2, 3)); // 6
console.log(soma2(0, 0, 0)); // 0

// Usando o valor padrão do ES2015 - \0/

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma3()); // 3
console.log(soma3(3)); // 5
console.log(soma3(1, 2, 3)); // 6
console.log(soma3(0, 0, 0)); // 0
```

### 68. "this" pode variar

* Quando utilizada em uma função literal, a palavra ```this``` pode variar. No contesto de uma função Arrow ele não muda, e é definido no momento em que a função é criada, conhecido como "**this léxico**".

### 69. "this" e a Função bind #01

[Arquivo](funcao/thisEBind.js)

```javascript
const pessoa = {
    saudacao: 'Bom dia',
    falar: function () {
        console.log(this.saudacao);
    }
}

pessoa.falar();

const falar = pessoa.falar;
/**
 * Ao chamar a função a partir da constante falar
 * o this, perde a referência do objeto pessoa
 * returnando undefined
 */
falar() // undefined

/**
 * Para que o this utilizado na função falar do objeto
 * pessoa não perca a referência, podemos utilizar a 
 * função bind, que receberá como parâmetro o objeto
 * que o this está referenciando.
 */
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa(); // Bom dia
```

### 70. "this" e a Função bind #02

[Arquivo](funcao/thisEBind2.js)

```javascript
function Pessoa() {
    this.idade = 0;
    /**
     * Aqui criamos um atributo self que irá
     * sempre apontar para o objeto pessoa.
     * Assim substituímos a palavra reservada
     * this por self para que possamos chamar
     * em diferentes contextos a função
     * sem a perda de contexto
     */
    const self = this;
    setInterval(function() {
        self.idade++
        console.log(self.idade);
    }/*.bind(this)*/, 1000);
}

new Pessoa;
```

### 71. Funções Arrow #01

* Introduzido no ES2015 (ES6). A função Arrow traz além de uma sintaxe mais reduzida, alguns comportamentos que diferem das funções tradicionais no JavaScript.
* Uma das principais diferentes é que na função arrow, a palavra ```this``` está associada ao contexto em que a função foi declarada.
* As funções arrow sempre são funções anonimas, para que elas possam ser chamadas após sua declaração, podemos armazenálas em uma variável.

[Arquivo](funcao/arrowFunction1.js)

```javascript
let dobro = function (a) {
    return 2 * a;
}

dobro = (a) => {
    return 2 * a;
}

dobro = a => 2 * a;
console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá';
}

ola = () => 'Olá';
ola = _ => 'Olá'; // possui um parâmetro
console.log(ola());
```

### 73. Funções Arrow #02

* Exemplos onde poderemos ver o comportamento fixo do ```this```.

```javascript
const addZeroLeft = (num, len) => {
    let numberWithZeroes = String(num);
    let counter = numberWithZeroes.length;
    while (counter < len) {
        numberWithZeroes = '0' + numberWithZeroes;
        counter++;
    }
    return numberWithZeroes;
}

function Pessoa() {
    this.idade = 0;
    setInterval(() => {
        this.idade++;
        console.log(addZeroLeft(this.idade, 2));
    }, 1000);
}

new Pessoa;
```

### 73. Funções Arrow #03

[Arquivo](funcao/arrowFunction3.js)

```javascript
let comparaComThis = function (str, param) {
    console.log(str, "== this:", this === param);
}

console.log('Teste com function tradicional');
comparaComThis("global", global);
const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis("global", global);
comparaComThis("obj", obj);

let comparaComThisArrow = (str, param) => {
    console.log(str, "== this:", this == param);
}

console.log('\nTeste com Arrow function');
comparaComThisArrow("global", global);
/**
 * O this em uma função arrow irá no runtime
 * Node apontar para o arquivo, que podemos
 * acessar através do module.exports
 */
comparaComThisArrow('module.exports', module.exports);
/**
 * O bind não causa efeito algum em uma arrow function
 * assim o this permanecerá apontando para o objeto
 * definido de acordo com o contexto lexico.
 */
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow('obj', obj);
comparaComThisArrow('module.exports', module.exports);
```

### 74. Funções Anônimas

[Arquivo](funcao/funcoesAnonimas.js)

```javascript
const soma = function (x, y) {
    return x + y;
}

const imprimirResultado =  function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function (x, y) {
    return x - y;
});
imprimirResultado(3, 4, (x, y) => {
    return x * y;
});
const pessoa = {
    falar: function () {
        console.log('Opa!');
    }
}

pessoa.falar();
```

### 75. Funções Callback #01

* O forEach passa para a função callback, que neste caso é a função imprimir, três parâmetros: 
    * o **valor** que neste caso será cada um dos fabricantes
    * o **indice** por isso conseguimos imprimir cada item e seu respectivo índice
    * o **array** por último ele envia o próprio array
* Como nossa função imprimir não possui um terceiro atributo, o array é apenas ignorado no momento da execução.

[Arquivo](funcao/callback1.js)

```javascript
const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach((fabricante) => console.log(fabricante))
```

### 76. Funções Callback #02

[Arquivo](funcao/callback2.js)

```javascript
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback
const notasBaixas1 = [];

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}

console.log(notasBaixas1);

// Com callback

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
});

console.log(notasBaixas2);

// com callback e arrow function

const notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3);
```

### 77. Funções Callback #03

* Exemplo para ser executado no Browser.

[Arquivo](funcao/callback3.js)

```javascript
// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!');
}
```

### 78. Funções Construtoras

* Em JavaScript utilizamos as funções de forma similar ao que usaríamos as classes em linguagens como Java ou C#. Assim, em JavaSctipt podemos instânciar objetos a partir de funções.

[Arquivo](funcao/funcaoConstrutora.js)

```javascript
function Carro(VelocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0;

    // método público
    this.acelerar = function() {
        if (velocidadeAtual + delta <= VelocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = VelocidadeMaxima;
        }
    }

    // método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro;
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
```

### 79. Tipos de Declaração

* As funções declaradas com a palavra function, são carregadas primeiro, de forma que podemos chamá-las mesmo antes de elas estarem definidas no arquivo. O mesmo não acontece para funções armazenadas em variáveis.

[Arquivo](funcao/tiposDeclaracao.js)

```javascript
/**
 * Posso chamar uma função declarada com function
 * antes de sua declaração
 */
console.log(soma(3, 4));
/**
 * O mesmo não ocorre com funções atribuídas a 
 * variáveis. Esta chamada:
 * console.log(sub(4, 3));
 * gera erro: "Cannot access 'sub' before initialization"
 * "Não é possível acessar 'sub' antes da inicialização" 
 */


// function declaration
function soma(x, y) {
    return x + y;
}

// function expression
const sub = function (x, y) {
    return x - y;
}
console.log(sub(3, 4));

// named function expression
/**
 * Este tipo de declaração é pouco usado e
 * só acrescentaria algum benefício em algumas
 * situações de debag onde apareceria o nome
 * da função que está gerando algum tipo de 
 * erro.
 */
const mult = function mult(x, y) {
    return x * y;
}
console.log(mult(3, 4));
```

### 80. Contexto Léxico

* Contexto léxico é o contexto no qual as coisas foram declaradas na linguagem.

[Arquivo](funcao/contextoLexico.js)

```javascript
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
```

### 81. Closures

* **Closure** - "Fechamento"
* **closure** é o escopo criado quando uma função é declarada.
* Este escopo permite a função acessar e minipular variáveis externas à função.

[Arquivo](funcao/closures.js)

```javascript
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
```

### 82. Function Factory #01

* **function Factory** são funções que retornam um objeto.

[Arquivo](funcao/factory1.js)

```javascript
// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa()); // { nome: 'Ana', sobrenome: 'Silva' }
```

### 83. Function Factory #02

[Arquivo](funcao/factory2.js)

```javascript
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

const notebook = criarProduto('Notebook', 2199.49);
const iPad = criarProduto('iPad', 1199.49);

console.log(notebook); // { nome: 'Notebook', preco: 2199.49, desconto: 0.1 }
console.log(iPad); // { nome: 'iPad', preco: 1199.49, desconto: 0.1 }
```

### 84. Classe VS Função Factory

* A função falar() declarada com a função factory, por não usar o ```this```, não perde a referência ao objeto, como o método declarado em uma ```class```

[Arquivo](funcao/classVsFactory.js)

```javascript
class Passoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Passoa('João');
p1.falar();

const criarPessoa = nome => {
    return {
        falar() {
            console.log(`Meu nome é ${nome}`);
        }
    }
}

const p2 = criarPessoa('João');
p2.falar();
```

### 85. Desafio Função Construtora

[Arquivo](funcao/desafioFuncaoConstrutora.js)

```javascript
function Pessoa (nome) {
    this.nome = nome;
    this.falar = function () {
        console.log(`Meu nome é ${nome}`);
    }
}

const p = new Pessoa('João');
p.falar();
```

### 86. IIFE

* IIFE (*Immediately Invoked Function Expression*) é uma função auto invocada.
* É uma estratégia útil no contexto do Browser para fugirmos do escopo global, já que ela será executada assim que declarada e tudo que for criado será escopo local da função.

[Arquivo](funcao/iife.js)

```javascript
(function () {
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente!');
})()
```

### 87. Call & Apply

[Arquivo](funcao/callApply.js)

```javascript
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${(this.preco * (1 - this.desc) * (1 + imposto)).toFixed(2)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4599,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco());

const carro = {
    preco: 49999,
    desc: 0.20
}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

// No call, os parâmetros são passados na própria função
console.log(getPreco.call(carro, 0.17, '$'));
// No apply, os parâmetros são passados através de um array
console.log(getPreco.apply(carro, [0.17, '$']));
```

### 88. Lista de exercícios: Fundamentos, Estruturas de controle e Funções

#### 1 -
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtracao, multiplicação e divisão desses valores.

[Arquivo](exercicios/88/exe01.js)

```javascript
function calcularOperacoes(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
    console.log(`${a} - ${b} = ${a - b}`);
    console.log(`${a} * ${b} = ${a * b}`);
    console.log(`${a} / ${b} = ${a / b}`);
}

calcularOperacoes(3, 4)
```

#### 2 -
Os triângulos podem ser classificaedos em 3 tipos quanto ao tamanho de seus lados: *Equilátero*: Os três lados são iguais. *Isósceles*: Dois lados iguais. *Escaleno*: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

[Arquivo](exercicios/88/exe02.js)

```javascript
function verificaTriângulo (l1, l2, l3) {
    if (l1 == l2 && l1 == l3) {
        console.log("O triângulo é equilátero");
    } else if (l1 == l2 || l2 == l3 || l1 == l3) {
        console.log("O triângulo é isósceles");
    } else {
        console.log("O triângulo é escaleno");
    }
}

verificaTriângulo(3, 3, 3)
verificaTriângulo(4, 3, 3)
verificaTriângulo(1, 2, 3)
```

#### 3 -
Crie uma função que recebe dois parâmetros, base e expoente, e retorno a base elevada ao expoente

[Arquivo](exercicios/88/exe03.js)

```javascript
function pow (base, expoente) {
    return base ** expoente;
}

console.log(pow(2, 5));
```

#### 4 -
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

[Arquivo](exercicios/88/exe04.js)

```javascript
function divisao (a, b) {
    console.log(`Quociente: ${Math.floor(a / b)}`);
    console.log(`resto: ${a % b}`);
}

divisao(20, 5);
divisao(20, 3);
```

#### 5 -
Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quado faz o seguinte comando no console: ```console.log(0.1 + 0.2);``` O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato que o ponto é utilizado no logar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorno R$ 0,30 (observe a vírgula e o ponto).

[Arquivo](exercicios/88/exe05.js)

```javascript
function emReal (a) {
    console.log(`R$ ${a.toFixed(2).toString().replace('.', ',')}`);
}

emReal(0.30000000000000004);
```

#### 6 -
Elabore duas funções que recebe3m três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

[Arquivo](exercicios/88/exe06.js)

```javascript
function calculaJurosSimples(capitalInicial, taxaJuros, tempoAplicacao) {
    return `R$ ${(capitalInicial + capitalInicial * taxaJuros * tempoAplicacao).toFixed(2)}`;
}

function calculaJurosCompostos(capitalInicial, taxaJuros, tempoAplicacao) {
    return `R$ ${((capitalInicial * (1 + taxaJuros) ** tempoAplicacao)).toFixed(2)}`;
}

console.log(calculaJurosSimples(100, 0.1, 2));
console.log(calculaJurosCompostos(100, 0.1, 2));
```

### 7 -
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, "*ax2*", "*bx*" e "*c*", de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5 e 12. Como retorno deve ser passado um vetor que tem 2 valores, um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: "*Delta é negativo*".

[Arquivo](exercicios/88/exe07.js)

```javascript
function calculaBhaskara(ax2, bx, c) {
    const delta = bx ** 2 - 4 * ax2 * c;
    if (delta >= 0) {
        const res = [];
        v1 = (-bx + Math.sqrt(delta))/( 2 * ax2);
        res.push(v1);
        v2 = (-bx - Math.sqrt(delta))/( 2 * ax2);
        res.push(v2);
        return res;
    } else {
        return "Delta é negativo";
    }
}

console.log(calculaBhaskara(1, 3, 2))
console.log(calculaBhaskara(3, 1, 2))

```

#### 8 -
Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, mantém registro de todas as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou mentor que seu melhor e pior desempenho. Dada uma lista string = "pontuação1, pontuação2, pontuação3, etc...", escreva uma função que ao recebê-la, irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo.
Obs.: O primeiro jogo não conta commo novo recorde do melhor.
Exemplo:
String: "10 20 20 8 25 3 0 30 1"
retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação aconteceu no sétimo jogo)

[Arquivo](exercicios/88/exe08.js)

```javascript
const stringPontuacoes = '10 20 20 8 25 3 0 30 1';

function progresso (stringPontuacoes) {
    const pontuacoes = stringPontuacoes.split(' ');
    let maiorPontuacao = pontuacoes[0];
    let menorPontuacao = pontuacoes[0];
    let qtdQuebraDeRecords = 0;
    let piorJogo = 0;
    for (let i in pontuacoes) {
        if (Number(pontuacoes[i]) > Number(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++;
        }
        if (Number(pontuacoes[i]) < Number(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = Number(i) + 1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo];
}

console.log(progresso(stringPontuacoes));
```

#### 9 -
Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação: 
- Todo aluno recebe uma nota de 0 a 100. 
- Alunos com nnota abaixo de 40 são reprovados.
- As notas possuem o seguinte arredondamento: 
    - Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
    - Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno.

Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.

[Arquivo](exercicios/88/exe09.js)

```javascript
function classificaAluno(nota) {
    const notaCorrigida = arredondar(nota);
    if (notaCorrigida < 40) {
        console.log(`Aluno foi reprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Aluno foi aprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota < 38) {
        return nota
    } else if (nota % 5 >= 3 ) {
        return nota = nota + (5 - (nota % 5))
    } else {
        return nota = nota - (nota % 5)
    }
}

classificaAluno(29);
classificaAluno(38);
classificaAluno(84);
```

#### 10 -
Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne *true* ou *false*.

[Arquivo](exercicios/88/exe10.js)

```javascript
function div3 (num) {
    if (num % 3 != 0) {
        return false;
    }
    return true;
}

console.log(div3(3));
console.log(div3(4));
console.log(div3(12));
console.log(div3(20));
```

#### 11 -
As regras para o cálculo dos anos bissextos são as seguintes:
- De 4 em 4 anos é bissexto;
- De 100 em 100 anos não é bissexto;
- De 400 em 400 anos é bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem e retornando true ou false.

[Arquivo](exercicios/88/exe11.js)

```javascript
function anoBissexto (ano) {
    let anoBissexto;
    if (ano <= 0) {
        anoBissexto = false;
    } else if (ano % 400 == 0) {
        anoBissexto = true;
    } else if (ano % 100 == 0) {
        anoBissexto = false;
    } else if (ano % 4 == 0) {
        anoBissexto = true;
    } else {
        anoBissexto = false;
    }
    if (!anoBissexto) {
        console.log(`O ano ${ano} não é bissexto`);
        return false;
    }
    console.log(`O ano ${ano} é bissexto`);
    return true;
}

console.log(anoBissexto(0));
console.log(anoBissexto(4));
console.log(anoBissexto(100));
console.log(anoBissexto(400));
console.log(anoBissexto(800));
console.log(anoBissexto(2020));
console.log(anoBissexto(2021));
```

#### 12 - 
Faça um algoritmo que calcule o fatorial de um número.

[Arquivo](exercicios/88/exe12.js)

```javascript
function calculaFatorial (num) {
    return num == 0 ? 1 : num * calculaFatorial(num - 1);
}

function fatorial (num) {
    if (num < 0) {
        console.log('O número deve ser maior que 0 (zero).');
    } else {
        console.log(`${num}! = ${calculaFatorial(num)}`);
    }
}

fatorial(-1); // O número deve ser maior que 0 (zero)
fatorial(0); // 0! = 1
fatorial(1); // 1! = 1
fatorial(2); // 2! = 2
fatorial(3); // 3! = 6
fatorial(4); // 4! = 24
fatorial(5); // 5! = 120
fatorial(6); // 6! = 720
fatorial(7); // 7! = 5040
fatorial(8); // 8! = 40320
fatorial(9); // 9! = 362880
fatorial(10); // 10! = 3628800
```

#### 13 -
Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

[Arquivo](exercicios/88/exe13.js)

```javascript
function diasDaSemana(dia) {
    switch (dia) {
        case 1:
            return 'Fim de samana';
        case 2:
            return 'Dia útil';
        case 3:
            return 'Dia útil';
        case 4:
            return 'Dia útil';
        case 5:
            return 'Dia útil';
        case 6:
            return 'Dia útil';
        case 7:
            return 'Fim de samana';
        default:
            return 'Dia inválido'
    }
}

console.log(diasDaSemana(0)); // Dia inválido
console.log(diasDaSemana(1)); // Fim de samana
console.log(diasDaSemana(2)); // Dia útil
console.log(diasDaSemana(3)); // Dia útil
console.log(diasDaSemana(4)); // Dia útil
console.log(diasDaSemana(5)); // Dia útil
console.log(diasDaSemana(6)); // Dia útil
console.log(diasDaSemana(7)); // Fim de samana
console.log(diasDaSemana(8)); // Dia inválido
```

#### 14 -
Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, retorne no console: "Não vendemos esta fruta aqui". Caso kiwi, retorne: "Estamos com escassez de kiwis". Caso melância: "Aqui está, são 3 reais o quilo". Teste com estas três opções. Crie também um *default*, que retornará uma mensagem de erro no console.

[Arquivo](exercicios/88/exe14.js)

```javascript
function comprarFrutas(fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui.');
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis.');
            break;
        case 'melância':
            console.log('Aqui está, são 3 reais o quilo.');
            break;
        default:
            console.log('fruta não localizada');
    }
}

comprarFrutas('maçã');
comprarFrutas('kiwi');
comprarFrutas('melância');
comprarFrutas('larânja');
```

#### 15 -
Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, cao o comprador queira o hatch, retorne: "Compra efetuada com sucesso". Nas outras opções, retorne: "Tem certeza que não prefere este modelo?". Caso seja especificado um modelo que não está disponível, retorne no console: "Não trabalhamos com este tipo de automóvel aqui'.

[Arquivo](exercicios/88/exe15.js)

```javascript
function revenda (modelo) {
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso';
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            return 'Tem certeza que não prefere este modelo?';
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui';
    }
}

console.log(revenda('hatch')); // Compra efetuada com sucesso
console.log(revenda('sedans')); // Tem certeza que não prefere este modelo?
console.log(revenda('motocicletas')); // Tem certeza que não prefere este modelo?
console.log(revenda('caminhonetes')); // Tem certeza que não prefere este modelo?
console.log(revenda('jipe')); // Não trabalhamos com este tipo de automóvel aqui
```

#### 16 -
Utilizando a estrutura do Switch, faça um programa que simule uma calculadora básica. O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora(2, '+', 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são '+', '-', '*' e '/'. Crie um caso default para operações inválidas.

[Arquivo](exercicios/88/exe16.js)

```javascript
function calculadora (num1, operacao, num2) {
    switch (operacao) {
        case '+':
            console.log(`${num1} ${operacao} ${num2} = ${num1 + num2}`);
            break;
        case '-':
            console.log(`${num1} ${operacao} ${num2} = ${num1 - num2}`);
            break;
        case '*':
            console.log(`${num1} ${operacao} ${num2} = ${num1 * num2}`);
            break;
        case '/':
            console.log(`${num1} ${operacao} ${num2} = ${num1 / num2}`);
            break;
        default:
            console.log('Operação inválida');
    }
}

calculadora(5, '+', 10); // 5 + 10 = 15
calculadora(10, '-', 5); // 10 - 5 = 5
calculadora(6, '*', 8); // 6 * 8 = 48
calculadora(35, '/', 5); // 35 / 5 = 7
```

#### 17 -
Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Plano | Aumento
------|---------
A | 10%
B | 15%
C | 20%

Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcule e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

[Arquivo](exercicios/88/exe17.js)

```javascript
function aumentoSalario (planoTrabalho, salarioAtual) {
    switch (planoTrabalho) {
        case 'A':
            console.log(`O novo salário é R$ ${salarioAtual * 1.1}`);
            break;
        case 'B':
            console.log(`O novo salário é R$ ${salarioAtual * 1.15}`);
            break;
        case 'C':
            console.log(`O novo salário é R$ ${salarioAtual * 1.2}`);
            break;
        default:
            console.log(`Plano inválido`);
    }
}

aumentoSalario('A', 100); // O novo salário é R$ 110.00000000000001
aumentoSalario('B', 100); // O novo salário é R$ 114.99999999999999
aumentoSalario('C', 100); // O novo salário é R$ 120
aumentoSalario('D', 100); // Plano inválido
```

#### 18 -
Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando switch. Crie um caso default que escreva 'Número fora do intervalo'.

[Arquivo](exercicios/88/exe18.js)

```javascript
function numeroPorExetenso (numero) {
    switch (numero) {
        case 0:
            console.log('Zero');
            break;
        case 1:
            console.log('Um');
            break;
        case 2:
            console.log('Dois');
            break;
        case 3:
            console.log('Três');
            break;
        case 4:
            console.log('Quatro');
            break;
        case 5:
            console.log('Cinco');
            break;
        case 6:
            console.log('Seis');
            break;
        case 7:
            console.log('Sete');
            break;
        case 8:
            console.log('Oito');
            break;
        case 9:
            console.log('Nove');
            break;
        case 10:
            console.log('Dez');
            break;
        default:
            console.log('Número fora do intervalo.');
    }
}

numeroPorExetenso(0); // Zero
numeroPorExetenso(1); // Um
numeroPorExetenso(2); // Dois
numeroPorExetenso(3); // Três
numeroPorExetenso(4); // Quatro
numeroPorExetenso(5); // Cinco
numeroPorExetenso(6); // Seis
numeroPorExetenso(7); // Sete
numeroPorExetenso(8); // Oito
numeroPorExetenso(9); // Nove
numeroPorExetenso(10); // Dez
numeroPorExetenso(11); // Número fora do intervalo.
```

#### 19 -
O cardápio de uma lanchonete é o seguinte:
Código | Descrição do Produto | Preço
-------|----------------------|-------
100 | Cachorro Quente | R$ 3,00
200 | Hambúrguer Simples | R$ 4,00
300 | Cheeseburguer | R$ 5,50
400 | Bauru | R$ 7,50
500 | Refrigerante | R$ 3,50
600 | Suco | R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.

[Arquivo](exercicios/88/exe19.js)

```javascript
function compra(codigo, qtd) {
    let total;
    switch (codigo) {
        case 100:
            total = 3;
            break;
        case 200:
            total = 4;
            break;
        case 300:
            total = 5.5;
            break;
        case 400:
            total = 7.5;
            break;
        case 500:
            total = 3.5;
            break;
        case 600:
            total = 2.8;
            break;
        default:
            return "Produto inválido";
        }
    return total *= qtd;
}

console.log(compra(100, 3)); // 9
console.log(compra(101, 3)); // Produto inválido
```

#### 20.
Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário c onsiderando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solictar R$ 18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

[Arquivo](exercicios/88/exe20.js)

```javascript
function ATM (value) {
    let nota100 = 0;
    let nota50 = 0;
    let nota10 = 0;
    let nota5 = 0;
    let nota1 = 0;
    let valorNota = calcularValorNota(value)
    while (valorNota > 0) {
        switch (valorNota) {
            case 100:
                nota100++;
                value -= 100;
                break;
            case 50:
                nota50++;
                value -= 50;
                break;
            case 10:
                nota10++;
                value -= 10;
                break;
            case 5:
                nota5++;
                value -= 5;
                break;
            case 1:
                nota1++;
                value -= 1;
                break;
        }

        valorNota = calcularValorNota(value);
    }

    imprimeNotas(nota100, nota50, nota10, nota5, nota1);

}

function calcularValorNota(value) {
    if (value >= 100) {
        return 100;
    } else if (value >= 50) {
        return 50;
    } else if (value >= 10) {
        return 10;
    } else if (value >= 5) {
        return 5;
    } else if (value >= 1) {
        return 1;
    } else {
        return 0;
    }
}

function imprimeNotas(notas100, notas50, notas10, notas5, notas1) {
    if (notas100) {
        console.log(`${notas100} nota(s) de R$ 100,00`);
    }
    if (notas50) {
        console.log(`${notas50} nota(s) de R$ 50,00`);
    }
    if (notas10) {
        console.log(`${notas10} nota(s) de R$ 10,00`);
    }
    if (notas5) {
        console.log(`${notas5} nota(s) de R$ 5,00`);
    }
    if (notas1) {
        console.log(`${notas1} nota(s) de R$ 1,00`);
    }
}

ATM(167.00);
```

#### 21 -
Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100,00 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$ 80,00;
2) conveniados com idade entre 10 e 30 anos pagam R$ 50,00;
3) conveniados com idade de 30 até 60 anos pagam R$ 95,00;
4) conveniados acima de 60 anos pagam R$ 130,00.

[Arquivo](exercicios/88/exe21.js)

```javascript
function valorPlanoSaude(idade) {
    let valorTotal = 100;
    if (idade < 10) {
        valorTotal += 80;
    } else if (idade >= 10 && idade < 30) {
        valorTotal += 50;
    } else if (idade >= 30 && idade < 60) {
        valorTotal += 95;
    } else {
        valorTotal += 130;
    }
    console.log(`O valor total do plano é R$ ${valorTotal.toFixed(2)}`);
}

valorPlanoSaude(9);
valorPlanoSaude(10);
valorPlanoSaude(30);
valorPlanoSaude(80);
```
#### 22 -
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro, ...) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

[Arquivo](exercicios/88/exe22.js)

```javascript
function pagarAssociacao (mes, valor) {
    montante = valor * Math.pow((1 + 0.05), mes - 1);
    return montante.toFixed(2);
}

console.log(pagarAssociacao(1, 100));
console.log(pagarAssociacao(2, 100));
console.log(pagarAssociacao(4, 100));
```

### 23 -
Escreva um algoritmos que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes 3. Mowstre o código do aluno, suas três notas, a média calculada e uma mensagem "*APROVADO*" se a média for maior ou igual a 5 e "*Reprovado*" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

[Arquivo](exercicios/88/exe23.js)

```javascript
function Resultado(cod, nota1, nota2, nota3) {
    let media = calculaMediaPonderada(nota1, nota2, nota3);
    let restultado = media >= 5 ? "Aprovado" : "Reprovado";
    console.log(`Código do aluno: ${cod}\nNota 1: ${nota1}\nNota 2: ${nota2}\nNota 3: ${nota3}\nMédia: ${media}\nResultado: ${restultado}`);
}

function calculaMediaPonderada(nota1, nota2, nota3) {
    let maior;
    let notaMenor1;
    let notaMenor2;
    if (nota1 >= nota2 && nota1 >= nota3) {
        maior = nota1;
        notaMenor1 = nota2;
        notaMenor2 = nota3;
    } else if (nota2 >= nota1 && nota2 >= nota3) {
        maior = nota2;
        notaMenor1 = nota1;
        notaMenor2 = nota3;
    } else {
        maior = nota3;
        notaMenor1 = nota1;
        notaMenor2 = nota2;
    }
    return ((maior * 4) + (notaMenor1 * 3) + (notaMenor2 * 3)) / 10
}

Resultado(100, 5, 5, 5)
Resultado(100, 4, 5, 5)
Resultado(100, 4, 5, 6)
```

#### 24 -
Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

[Arquivo](exercicios/88/exe24.js)

```javascript
function imprimeHelloWorld() {
    let cont = 0;
    while (cont < 11) {
        console.log(`${cont + 1}- Hello World!`);
        cont++;
    }
}

imprimeHelloWorld();
```

#### 25 -
Escrever um programa para exibir os números de 1 até 50 na tela.

[Arquivo](exercicios/88/exe25.js)

```javascript
function imprimirNumeros () {
    let cont = 1;
    while (cont <= 50) {
        console.log(cont);
        cont++;
    }
}

imprimirNumeros();
```

#### 26 -
Fazer um programa para encontrar todos os pares entre 1  e 100.

[Arquivo](exercicios/88/exe26.js)

```javascript
function pares(inicio, fim) {
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

pares(1, 100);
```

#### 27 -
Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

[Arquivo](exercicios/88/exe27.js)

```javascript
function comparaAlturas(altura1, taxa1, altura2, taxa2) {
    let tempo = 0;
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            console.log(`Criança 1 passará a Criança 2 em 1 ano.`);
        } else if (taxa1 < taxa2) {
            console.log(`Criança 2 passará a Criança 1 em 1 ano.`);
        } else {
            console.log("As duas crianças possuem a mesma altura");
        }
    } else if (altura1 < altura2) {
        console.log(`Criança 1 com ${altura1} cm`);
        console.log(`Criança 2 com ${altura2} cm`);
        while (altura1 < altura2) {
            altura1 = altura1 + altura1 * taxa1;
            altura2 = altura2 + altura2 * taxa2;
            tempo++;
        }
        console.log(`Criança 1 passou a Criança 2 em ${tempo} ano(s).`);
        console.log(`Criança 1 com ${altura1} cm`);
        console.log(`Criança 2 com ${altura2} cm`);
    } else {
        console.log(`Criança 1 com ${altura1} cm`);
        console.log(`Criança 2 com ${altura2} cm`);
        while (altura1 > altura2) {
            altura1 = altura1 + altura1 * taxa1;
            altura2 = altura2 + altura2 * taxa2;
            tempo++;
        }
        console.log(`Criança 2 passou a Criança 1 em ${tempo} ano(s).`);
        console.log(`Criança 1 com ${altura1} cm`);
        console.log(`Criança 2 com ${altura2} cm`);
    }
}

comparaAlturas(50, 0.05, 50, 0.06);
```

#### 28 -
Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

[Arquivo](exercicios/88/exe28.js)

```javascript
function separarParImpar(array) {
    let contadorPar = 0;
    let contadorImpar = 0;
    for (let i in array) {
        array[i] % 2 == 0 ? contadorPar++ : contadorImpar++;
    }
    console.log(`São ${contadorPar} numero(s) par(es) e ${contadorImpar} número(s) ímpar(es)`);
}

separarParImpar([1, 3, 78, 90, 13])
```

#### 29 -
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10, 20] (repare que o intervalo é fechado, ou seja, inclui o 10 e 20) e quantos destes estão fora do intervalo, escrevendo estas informações.

[Arquivo](exercicios/88/exe29.js)

```javascript
function noIntervalo1020(array) {
    let noIntervalo = 0;
    let foraDoIntervalo = 0;
    for (let i in array) {
        if (array[i] >= 10 && array[i] <= 20) {
            noIntervalo++;
        } else {
            foraDoIntervalo++;
        }
    }
    console.log(`${noIntervalo} numero(s) estão entre 10 e 20`);
    console.log(`${foraDoIntervalo} numero(s) não estão entre 10 e 20`);
}

noIntervalo1020([1, 3, 5, 7, 9, 11, 12, 13, 15, 17, 19]);
```

#### 30 -
Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

[Arquivo](exercicios/88/exe30.js)

```javascript
function maiorMenor(array) {
    let maiorNumero = array[0];
    let menorNumero = array[0];
    for (let i in array) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
        if (array[i] < menorNumero) {
            menorNumero = array[i];
        }
    }
    console.log(`O maior número é ${maiorNumero}`);
    console.log(`O menor número é ${menorNumero}`);
}

maiorMenor([23, 3984, 1, 3984, 9])
```

#### 31 -
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor, e imprime a quantidade no console.

[Arquivo](exercicios/88/exe31.js)

```javascript
function numerosNegativos(array) {
    let contNegativos = 0;
    for (let i in array) {
        if (array[i] < 0) {
            contNegativos++;
        }
    }
    console.log(`A quantidade de números negativos é ${contNegativos}`);
}

numerosNegativos([0, 3, -2, 10, -5]);
```

#### 32 -
Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

[Arquivo](exercicios/88/exe32.js)

```javascript
function calculaMediaArray(array) {
    let media = 0;
    for (let i in array) {
        media += array[i];
    }
    media /= array.length;
    console.log(`A média é ${media}`);
}

calculaMediaArray([1, 3, 5, 7, 9, 11]);
```

#### 33 -
Crie três vetores, chamados vetorinteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vertor resultado deverão aparecer no console.

[Arquivo](exercicios/88/exe33.js)

```javascript
let vetorInteiro = [9, 8, 4, 2];
let vetorString = ["Laranja", "Melancia", "Limão", "Uva"];
let vetorDouble = [9.8, 8.4, 4.2, 2.9];

function concatArrays(...args) {
    let result = [];
    for (let i in args) {
        result = result.concat(args[i])
    }
    return result;
}

console.log(concatArrays(vetorInteiro, vetorString));
console.log(concatArrays(vetorString, vetorDouble));
```

#### 34 -
Construa uma função que receberá duas Strings de tamanhos variádos e que retornará *true* ou *false* caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam em ambas as palavras.

[Arquivo](exercicios/88/exe34.js)

```javascript
function testaCaracteres(str1, str2) {
    let estaContido = true;
    for (let i = 0; i < str1.length; i++) {
        let charStr1 = str1.charAt(i).toLowerCase();
        for (let j = 0; j < str2.length; j++) {
            let charStr2 = str2.charAt(j).toLowerCase();
            if (charStr1 === charStr2) {
                estaContido = true;
                break;
            } else {
                estaContido = false;
            }
        }
        if (!estaContido) {
            return estaContido;
        }
    }
    return estaContido;
}

console.log(testaCaracteres('abc', 'csa'));
```

#### 35 -
Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostra-los no console. É importante lembrar que o método ```push```retorna somente o tamanho do vetor. Ao final das operações imprima os vetores no console.

[Arquivo](exercicios/88/exe35.js)

```javascript
let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

function mescla(vetorPilha, vetorAdiciona) {
    for (let i = 0; i < vetorAdiciona.length; i++) {
        vetorPilha.push(vetorAdiciona[i]);
    }
}

mescla(vetorPilha, vetorAdiciona);

console.log("Vetor adicionado: " + vetorAdiciona);
console.log("Vetor Resultado: " + vetorPilha);
```

#### 36 -
Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento fo maior que 5.

[Arquivo](exercicios/88/exe36.js)

```javascript
function multiplyAll(array, number) {
    for (let i in array) {
        array[i] = array[i] * number;
    }
    console.log(array);
}

function multiplyMajor5(array, number) {
    for (let i in array) {
        if (array[i] > 5) {
            array[i] = array[i] * number;
        }
    }
    console.log(array);
}

multiplyAll([1, 3, 5, 7, 9], 3);
multiplyMajor5([1, 3, 5, 7, 9], 3);
```

#### 37 -
Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número *n* (numero de termo), *a1* (o primeiro termo) e *r* (a razão) e escreva os *n* termos bem como a soma dos elementos.

[Arquivo](exercicios/88/exe37.js)

```javascript
function pa(n, a1, r) {
    let pa = [];
    let somaPa = 0;
    for (let i = 0; i < n; i++) {
        a1 = a1 + r
        somaPa += a1;
        pa.push(a1);
    }
    console.log(`PA: ${pa}`);
    console.log(`Soma dos termos - PA: ${somaPa}`);
}

function pg(n, a1, r) {
    let pg = [];
    let somaPg = 0;
    for (let i = 0; i < n; i++) {
        a1 = a1 * r;
        somaPg += a1;
        pg.push(a1);
    }
    console.log(`PG: ${pg}`);
    console.log(`Soma dos termos - PG: ${somaPg}`);
}

pa(10, 1, 2);
pg(10, 1, 2);
```

#### 38 -
Escreva uma função que receba dois parâmetros inicio e fim. Essa função deve imprimir todos os números ímparews que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

[Arquivo](exercicios/88/exe38.js)

```javascript
function numerosImpares(inicio, fim) {
    inicio > fim ? [inicio, fim] : [fim, inicio];
    let impares = []
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 != 0) {
            impares.push(i)
        }
    }
    let res = "";
    for (let i in impares) {
        res = res.concat(impares[i], ", ")
    }
    console.log(res);
}

numerosImpares(0, 100);
```

#### 39 -
Crie uma função que receba dois valores de igual tamanho e troque seus elementos de modo que primeiro elemento do vetor A, passe a ser o primeiro elemento do vetor B e vice e versa e assim sucessivamente. Faça a troca sem utilizar uma veriável auxiliar.

[Arquivo](exercicios/88/exe39.js)

```javascript
let vetorA = [1, 2, 3, 4, 5];
let vetorB = [6, 7, 8, 9, 10];

function trocaElementosVetores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        tamanho = vetorA.length
        for (let i = 0; i < tamanho; i++) {
            vetorB.push(vetorA[i]);
            vetorA.push(vetorB[i]);
        }
        for (let i = 0; i < tamanho; i++) {
            vetorA.shift();
            vetorB.shift();
        }
    } else {
        console.log("Vetor de tamanhos diferentes!");
    }
}

trocaElementosVetores(vetorA, vetorB);

console.log(`Vetor A: ${vetorA}`);
console.log(`Vetor B: ${vetorB}`);
```

#### 40 -
Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 e 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 e 8,9 o conceito B e de 9,0 a 10,0 o conceito A.

[Arquivo](exercicios/88/exe40.js)

```javascript
function retornaConceito(arrayNotas) {
    let media = verificaMedia(arrayNotas);
    if (media < 5) {
        console.log("Seu conceito é D");
    } else if (media < 7) {
        console.log("Seu conceito é C");
    } else if (media < 9) {
        console.log("Seu conceito é B");
    } else {
        console.log("Seu conceito é A");
    }
}

function verificaMedia(array) {
    let total = 0;
    for (let i in array) {
        total += array[i]
    }
    return (total / array.length).toFixed(2);
}

retornaConceito([9, 10]);
```

## Seção 6: Javascript: Objeto

### 90. Introdução à OO

* Depois das funções, os objetos são um dos principais recursos da linguaguem.
* Os primeiros programas de computador eram criados no paradigma não estruturado. Para detalhar um pouco mais sobre este paradigma foram utilizados os seguintes links:
    * https://www.ramon.pro.br/o-paradigma-nao-estruturado/
    * https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_estruturada
    * https://pt.wikipedia.org/wiki/Edsger_Dijkstra
    * https://pt.wikipedia.org/wiki/Considered_harmful
    * https://www.cs.utexas.edu/users/EWD/ewd02xx/EWD215.PDF Link com a carta aberta de Kijkstra "Go To Statement Considered Harmful" - GO TO declaração considerada perigosa.
* Os programas não estruturados utilizavam comandos elementares:
    * *Processamento* - qualquer operação que o computador pode realizar em seu nível básico como operações aritméticas, de atriuição, etc. Nesse caso, também levamos em consideração as operações de entrada e saída de dados.
    * *Fluxo* - é a indicação de qual o próximo comando a ser realizaedo pelo computador.
    * *Decisão* - é o comando que permite o computador desviar, de forma condicional, o fluxo a ser seguido.
* A partir de algum tempo, impulsionado tanto por vantagens práticas, como por algumas publicações de cientistas da comnputação, como a carta aberta de Kijkstra e o teorema de Böhm-Jacopini, foi ganhando força a programação estruturada.
* A programação estruturada (PE) é um padrão ou paradigma de programação de engenharia de software, com êngase em sequência, decisão e, iteração (sub-rotinas, laços de repetição, condicionais e, estruturas em bloco).
* Dentro da Programação estruturada temos também diversos paradigmas. O primeiro deles é o *procedural*.
* O paradigma procedural é baseado na *procedure* ou função.
* No exemplo 1 vemos a chamada de uma possível função "processamento" recebendo três parâmetros que são processados por estas funções.
```javascript
// Exemplo 1
processamento(valor1, valor2, valor3)
```
* Apesar de já vermos uma avanço em relação ao paradigma não estruturado, a programação procedural também gera alguns problemas, pois todos os dados do programa acabam por ficar "disponíveis" para serem alterados por qualquer função, podendo gerar muitas inconsistências, principalmente em programas maiores.
* A Principal mudança ocorrida na **Programação Orientada a objetos** é que o foco que antes encontrava-se na função, passou a ser nos dados. Agora dentro dos dados "Objetos" temos funções especializadas que alteram este o que ajuda a manter a consistência.
```javascript
// Exemplo 2
objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        //...
    }
}
objeto.processamento();
```
* No exemplo 2, podemos notar a diferença em relação a programação procedural, agora o objeto possuí os parâmetros (dados) e os métodos (funções) para que possam manipular os atributos de forma segura.
* 4 princípios importantes a orientação a objetos:
    * *Abstração* - É o processo de "traduzir" um objeto do mundo real para um objeto computacional. É importante que saibamos reconhecer as necessidades do sistema que estamos construindo, pois não só seria muito custoso, como na maioria das vezes irrelevante, trazer todas as características de um objeto real para o programa. Ex.: *Para o sistema do DETRAN, criar um objeto carro com o método acelerar() não faria muito sentido, porém atributos como placa, ano, modelo são pertinentes. Já para um sistema de uma oficina mecânica outras características podem ser necessárias*.
    * *Encapsulamento* - Significa que os detelhes de implementação são escondidos e é criada uma interface simples, para a pessoa que for utilizar aquele sistema. Ex.: *Novamente o exemplo do carro é bastante ilustrativo, para um motorista é necessário conhecer como ligar, acelerar, frear, saber quanto abastecer, etc. Já os detalhes mecânicos são encapsulados, não sendo necessário para quem utiliza aquele objeto saber como funciona*.
    * *Herança (prototype)* - Princípio baseano na relação *é um*. É junto com a composição uma forma de reaproveitamento de código. Neste caso você receberá atributos e comportamentos de uma classe pai. Embora algumas linguagens permitam o que chamamos de herança múltipla, o JavaScript permite apenas um único pai, que por sua vez também pode herdar de outra classe atributos e comportamentos. Durante o desenvolvimento é melhor priorizarmos a composição (relação *tem um*) ao invés da herança.
    * *Polimorfismo* - Significa múltiplas formas. Um objeto instanciado como Carro poderá ser tratado como uma Ferrari, que irá possuir atributos e comportamentos específicos.

### 91. Revisão sobre Objeto

[Arquivo](objeto/objetoRevisao.js)

```javascript
// Objeto é uma coleção dinâmica de pares chave/valor
const produto = new Object;
produto.nome = "cadeira";
produto['marca do produto'] = 'Genérica';
produto.preco = 220;

console.log(produto);
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Júnior',
        idade: 19
    }, {
        nome: 'Ama',
        idade: 42
    }],
    calculaValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante';
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calculaValorSeguro;
console.log(carro);
console.log(carro.condutores); // retorna undefined
// console.log(carro.condutores.length); // Gera erro!
```

### 92. Estratégias de criação de objetos

[Arquivo](objeto/criandoObjetos.js)

```javascript
/**
 * Podemos criar objetos:
 */

// Usando a notação literal
const obj1 = {}
console.log(obj1);

// Usando o Object
const obj2 = new Object();
console.log(obj2);

// Usando funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
    /**
     * Nesta função apenas podemos acessar externamente
     * o atributo nome, o prco e o desconto, uma vez
     * determinados não podem ser modificados.
     */
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Usando uma Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

// Usando o Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Usando uma função conhecida que retorna objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON!"}');
console.log(fromJSON);
```

### 93. Objetos Constantes

[Arquivo](objeto/objetosConstantes.js)

```javascript
const pessoa = {
    nome: 'João'
}
/**
 * Aqui a constante pessoa recebe um endereço de memória.
 * Atribuição por referência.
 */

 pessoa.nome = 'Pedro';
 pessoa.nome = 'Pedro Silva';
 console.log(pessoa);
 /**
  * Ao criar ou alterar um valor de atributo,
  * a constante pessoa permanece apontatndo para o
  * mesmo endereço de memória. Não gerando qualquer
  * tipo de erro na execução.
  * Se eu tentar atribuir um novo objeto para a constante.
  * Por exemplo:
  *   pessoa = { nome: 'Ana'};
  * aí sim teremos um erro. pois estaremos tentando atribuir
  * o endereço de memória de um outro objeto para esta constante
  */

  /**
   * Utilizando o método freeze() de Object, podemos "congelar"
   * o objeto pessoa. Assim além de não conseguirmos mais alterar
   * a referência para o objeto, não conseguimos mais alterar os
   * próprios dados do objeto.
   * A partir deste momento não conseguimos mais
   * alterar nenhum atributo do objeto. Embora se houver alguma
   * atribuição, este não gere erro, apenas não modifica o objeto.
   */
  Object.freeze(pessoa);
  pessoa.nome = 'Maria'; // Não gera erro, mas não altera o atributo.
  pessoa.endereco = 'Rua A'; // Não adiciona o atributo, mas também não gera erro.
  delete pessoa.nome; // Não gera erro, mas não excluí o atributo.
  console.log(pessoa);
```

### 94. Notação literal

[Arquivo](objeto/notacaoLiteral.js)

```javascript
const a = 1;
const b = 2;
const c = 3;

const obj1 = {a: a, b: b, c: c};
const obj2 = {a, b, c};
console.log(obj1, obj2); // { a: 1, b: 2, c: 3 } { a: 1, b: 2, c: 3 }

const nomeAttr = 'nota';
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3); // { nota: 7.87 }

const obj4 = {[nomeAttr]: valorAttr};
console.log(obj4); // { nota: 7.87 }

const obj5 = {
    funcao1: function() {
        //...
    },
    //A partir do ES2015 (ES6):
    funcao2() {
        //...
    }
}

console.log(obj5); // { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
```

### 95. Getters/Setters

* Por convensão, para atributos que queremos que sejam privados, iniciamos seu nome com o underscore (_). Ex.: _nome. É importante, porém, que saibamos que isso não torna o atributo privado realmente, pondendo ser acessado e alterado externamente.
* JavaScript, ao contrario do que outras linguagens, como Java, por exemplo, não aceita *sobrecarga*, ou seja, dois métodos com o mesmo nome porém com quantidade ou tipos de parâmetros diferentes, a não ser no caso dos métodos getters e setters.

[Arquivo](objeto/getterSetter.js)

```javascript
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
```

### 96. Funções importantes de Object

[Arquivo](objeto/funcoesImportantes.js)

```javascript
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Object.keys retorna todas as chaves do objeto em formato de array
console.log(Object.keys(pessoa)); // [ 'nome', 'idade', 'peso' ]
// Object.values retorna todas os valores do objeto em formato de array
console.log(Object.values(pessoa)); // [ 'Rebeca', 2, 13 ]
// Object.entries retorna todas as chaves e valores de um objeto em formato de array
console.log(Object.entries(pessoa)); // [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});
/**
 * Retorno do forEach:
 * 
 * nome: Rebeca
 * idade: 2
 * peso: 13
 */

//
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // para aparecer nos métodos keys, values, entries, ...
    writable: false, // funciona como o Object.freezy
    value: '01/01/2019'
});

pessoa.dataNascimento = '01/01/2021';
console.log(pessoa.dataNascimento); // 01/01/2019
console.log(Object.keys(pessoa)); // [ 'nome', 'idade', 'peso', 'dataNascimento' ]

/**
 *  Object.assign (ECMAScript 2015)
 *  Pega o primeiro objeto
 *  e acrecenta o elementos dos 
 *  demais objetos.
 *  Também retorna o objeto completo
 *  Podendo ser armazenada em outra 
 *  objeto
 */

const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log('dest', dest); // dest { a: 4, b: 2, c: 3 }
console.log('o1', o1); // o1 { b: 2 }
console.log('o2', o2); // o2 { c: 3, a: 4 }
console.log('obj', obj); // obj { a: 4, b: 2, c: 3 }

// Com o Object.freeze o objeto não permitirá qualquer alteração
Object.freeze(obj);
obj.c = 1234;
console.log(obj); // { a: 4, b: 2, c: 3 }
```

### 97. Herança #01

* A função em JavaScript funciona um pouco diferente de outras linguagens orientadas a objetos. A herança é um princípio da Orientação a Objetos que permite que uma classe filha receba de uma classe pai características e comportamentos. O Principal objetivo é o reaproveitamente de código.
* Em JavaScript uma função ou classe só pode herdar de uma outra classe ou função.
* A herança em JavaScript é baseada em protótipos. Por exemplo, se tentarmos acessar uma variável em uma função e esta não possuir, o JavaScript tentará buscar esta variável na função pai. Este processo pode ocorrer indefinidamente, até que a função não possua mais esta relação de "herança", o que retornaria *undefined*, ou até que o valor seja encontrado.
* Para acessar o protótipo de um objeto podemos utilizar o atributo ```__proto__```, o que por padrão irá referenciar um atributo do Object que é o ```Object.prototype``` (que é o prototype de mais alto nível).
* ```Object.prototype``` não possui prototype, assim ao tentarmos acessar ```Object.prototype.__proto__``` o retorno será ```null```.
* Toda função possui um atributo prototype, embora o atributo da função Object possua características únicas.
* Toda função possuí também um atributo ```__proto__``` que aponta para ```Function.prototype```.
* Todo objeto possui uma referência a um prototype que poderemos acessar por ```__proto__```, porém **não** possui atributo prototype.

[Arquivo](objeto/heranca1.js)

```javascript
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__); // {}
console.log(ferrari.__proto__ === Object.prototype); // true
console.log(volvo.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
```

### 98. Herança #02

* A relação de herança poderá ser declarada tanto ao atribuírmos o ```__proto__``` do objeto quanto pelo método da função Object ```Object.setPrototypeOf()```

[Arquivo](objeto/heranca2.js)

```javascript
// Criando uma Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // undefined A B C

Object.prototype.attr0 = 0; // Não faça isso em casa!
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // 0 A B C

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
          if (this.velAtual + delta <= this.velMax) {
              this.velAtual += delta;
          } else {
              this.velAtual = this.velMax;
          }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, // shadowing (sombreamento do atributo do pai)

}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari); // { modelo: 'F40', velMax: 324 }
console.log(volvo); // { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());
```

### 99. Herança #03

* O método ```Object.keys()``` por padrão retorna apenas os atributos e comportamentos declarados no objeto, sem listar os herdados. Porém com o For In é listado tanto os atributos e métodos do objeto filho quanto do objeto pai.
* com o método ```hasOwnProperty()``` conseguimos testar se um atributo ou método pertence ao próprio objeto, caso falso, é recebido por herança.

[Arquivo](objeto/heranca3.js)

```javascript
const pai = { nome: 'Pedro', corCabelo: 'preto' }
const filha1 = Object.create(pai)
filha1.nome = 'Ana';
console.log(filha1.corCabelo); // preto

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
});

console.log(filha2.nome); // Bia
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`); // Bia tem cabelo preto

console.log(Object.keys(filha1)); // ['nome']
console.log(Object.keys(filha2)); // ['nome']

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`por herança: ${key}`);
}

/**
 * retorno do for in:
 * 
 * nome
 * por herança: corCabelo
 */
```

### 100. Herança #04

* Quando instanciamos um objeto com o operador new, o prototype deste objeto aponta para o prototype da função instanciada. Diferente de quando instanciamos um objeto literal ou apartir do new Object, que nestes casos o ```__proto__``` irá apontar para ```Object.prototype```
* Em resumo:

[Arquivo](objeto/herança4.js)

```javascript
function MeuObjeto() {

}

console.log(MeuObjeto.prototype); // {}

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;
console.log(obj1.__proto__ === obj2.__proto__); // true
console.log(MeuObjeto.prototype === obj1.__proto__); // true

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`);
}
obj1.falar();
obj2.nome = 'Rafael';
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype;
obj3.nome = "Obj3";
obj3.falar();
```

### 101. Herança #05

[Arquivo](objeto/heranca5.js)

```javascript
console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

console.log('Escola Cod3r'.reverse());

Array.prototype.first = function () {
    return this[0];
}

console.log([1, 2, 3, 4, 5].first());
console.log(['a', 'b', 'c'].first());

String.prototype.toString = function () {
    return 'Lascou tudo!';
}

console.log('Escola Cod3r'.reverse());
```

### 102. Herança #06

[Arquivo](objeto/heranca6.js)

```javascript
function Aula(nome, videoId) {
    this.nome = nome;
    this.videoId = videoId;
}

const aula1 = new Aula('Vem Vindo', 123);
const aula2 = new Aula('Até Breve', 456);
console.log(aula1, aula2);

// simulando o new
function novo(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}

const aula3 = novo(Aula, 'Bem Vindo', 123);
const aula4 = novo(Aula, 'Até Breve', 456);
console.log(aula3, aula4);
```

### 103. Evitando modificações

* ```Object.PreventExtensions()``` - Previne que sejam adicionados novos atributos a um determinado objeto. Não impede que o valor dos atributos sejam alterados.
* ```Object.seal()``` - Sela o objeto. Não é possível nem adicionar nem excluir atributos. Não impede que o valor dos atributos sejam alterados.
* ```Object.freeze()``` - Impede que sejam adicionados ou excluídos elementos do objeto e também que os valores sejam alterados.

[Arquivo](objeto/evitandoModificacoes.js)

```javascript
// Object.PreventExtensions
const produuto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produuto)); // Extensível: false

produuto.nome = 'Borracha';
produuto.descricao = 'Borracha escolar branca';
delete produuto.tag;
console.log(produuto); // { nome: 'Borracha', preco: 1.99 }

// Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa)); // true
pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa); // { nome: 'Juliana', idade: 29 }

// Object.freeze
```

### 104. JSON vs Objeto

* JSON é um formato textual. Diferentemente do objeto, o JSON não armazena funções, apenas dados.

[Arquivo](objeto/jsonVsObj.js)

```javascript
const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c; } };
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3}

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')); // { a: 1, b: 2, c: 3 }
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": []}')); // { a: 1.7, b: 'string', c: true, d: {}, e: [] }
```

### 105. Classe #01

[Arquivo](objeto/classe1.js)

```javascript
class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }
    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario () {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        });
        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario', 45000);
const contaDeLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamento(salario, contaDeLuz);
console.log(contas.sumario());
```

### 106. Classe #02

[Arquivo](objeto/classe2.js)

```javascript
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva');
    }
}

const filho = new Filho;
console.log(filho); // Filho { sobrenome: 'Silva', profissao: 'Professor' }
```

## Seção 7: JavaScript: Array

### 107. Array: Visão Geral

* Em JavaScript não existe um tipo de dado nativo array. O Array em JavaScript é um objeto com características especiais.
* Em JavaScript o array é uma estrutura dinâmico, cresce ou diminue dinamicamente. diferente do que ocorre em outras linguagens.
* Em JavaScript o array é uma estrutura heterogênea. não há nenhum impedimento para incluir valores de diferentes tipos, como números, strings, boolean, objetos ou mesmo outros arrays. Embora seja extremamente desaconselhável na maioria das situações misturar elementos de tipos diferentes dentro de um mesmol array.
* Assim como em outras linguagens, o array em JavaScript é uma estrutura indexada iniciando no índice 0.
* Ao tentarmos acessar um índice inexistente em um array, teremos como retorno undefined.
* O método ```.sort()``` altera o array, assim caso haja índices "Vazios" estes serão alocados no final do array. As strings são ordenadas em ordem alfabética.
* Ao deletarmos um array com o operador ```delete```, este apenas "limpa" aquela posição do array mantendo o índice como *undefined*
* O método ```splice()```altera o conteúdo de um array, adicionando novos elementos enquanto remove elementos antigos. Sintaxe:
    ```javascript
    array.splice(indice[, deleteCount[, elemento1[, ...[,elementoN]]]]);
    ```
    * Parâmetros da função ```splice()```:
        * **indice** - Índice o qual deve iniciar a alterar o array. Se maior que o tamanho total da mesma, nenhum elemento será alterado. Se negativo, irá iniciar a partir daquele número de elementos a partir do fim.
        * **deleteCount** - Um inteiro indicando o número de antigos elementos que devem ser removidos. Se o parâmetro ```deleteCount``` não é especificado, ou se é maior que o número de elementos restantes no array iniciando pelo índice, então todos os elementos até o fim do array serão deletados. Se ```deleteCount``` é 0, nenhum elemento é removido. Neste caso você deve especificar pelo menos um novo elemento.
        * **elemento1, ..., elementoN** - Os elementos a adicionar no array. Se você não especificar nenhum elemento, *splice* simplesmente removerá elementos da mesma.
    * Retorno da função ```splice()```
        * Um array contendo os elementos removidos. Se apenas um elemento é removido, por exemplo, um array contendo apenas um elemento é retornada. Se nenhum elemento é removido, um array vazio é retornada.

[Arquivo](array/array.js)

```javascript
console.log(typeof Array, typeof new Array, typeof []); // function object object

// Forma "Alternativa" para criação de array (não recomendada)
let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados); // [ 'Bia', 'Carlos', 'Ana' ]
// Forma "Tradicional" para declaração de arrays
aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]); // Bia
console.log(aprovados[1]); // Carlos
console.log(aprovados[2]); // Ana
console.log(aprovados[3]); // undefined

aprovados[3] = 'Paulo';
console.log(aprovados[3]); // Paulo
aprovados.push('Abia');
console.log(aprovados.length); // 5
aprovados[9] = 'Rafael';
console.log(aprovados.length); // 10
console.log(aprovados[8] === undefined); // true
console.log(aprovados); // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]
aprovados.sort();
console.log(aprovados); // [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

delete aprovados[1];
console.log(aprovados[1]); // undefined
console.log(aprovados[2]); // bia

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1); // A partir do índice 1, irá remover 1 índice
console.log(aprovados); // ['Bia', 'Ana']
```

### 108. Array: Métodos importantes

* ```array.pop()``` - remove o último elemento.
* ```array.push(elemento)``` - adiciona elemento a última posição.
* ```array.shift()```- Remove elemento da primeira posição.
* ```array.unshift()``` - Adiciona elemento a primeira posição.
* ```array.splice()``` - Conforme detalhado na aula anterior pode remover, adicionar ou remover e adicionar elementos.
* ```array.slice(start, end)``` - Retorna um novo array a partir do índice *start* até uma posição antes do índice *end*;

[Arquivo](array/arrayMetodos.js)

```javascript
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop();
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikkonen' ]
pilotos.push('Verstappen');
console.log(pilotos); // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]
pilotos.shift();
console.log(pilotos); // [ 'Alonso', 'Raikkonen', 'Verstappen' ]
pilotos.unshift('Hamilton');
console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

/**
 * splice pode adicionar e remover
 */

 // Adicionar
 pilotos.splice(2, 0, 'Bottas', 'Massa');
 console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

 // Remover
 pilotos.splice(3, 1)
 console.log(pilotos); // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

 const algunsPilotos1 = pilotos.slice(2);
 console.log(algunsPilotos1); // [ 'Bottas', 'Raikkonen', 'Verstappen' ]
 const algunsPilotos2 = pilotos.slice(1, 4);
 console.log(algunsPilotos2); // [ 'Alonso', 'Bottas', 'Raikkonen' ]
```

### 109. Simulando Array com Objeto

[Arquivo](array/simulandoArray.js)

```javascript
const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia'
}

console.log(quaseArray); // { '0': 'Rafael', '1': 'Ana', '2': 'Bia' }

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0]); // Rafael

const meuArray = ['Rafael', 'Ana', 'Bia'];

console.log(quaseArray.toString(), meuArray); // [ 'Rafael', 'Ana', 'Bia' ] [ 'Rafael', 'Ana', 'Bia' ]
```

### 110. Foreach #01

* O método forEach executará uma função callback para cada elemento do array. A função passada poderá ter até 4 parâmetros:
    * ```CurrentValue``` - O valor atual do elemento sendo processado no array
    * ```index``` - O índice do elemento atual sendo processado no array
    * ```array``` - O array a qual o forEach está sendo aplicado
    * ```thisArg``` - Valor a ser usado como *this* quando executar callback
* O método forEach() retorna undefined

[Arquivo](array/foreach1.js)

```javascript
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function(nome, indice){
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

 aprovados.forEach(nome => console.log(nome))

 /**
  * Saída
  * 
  * Agatha
  * Aldo
  * Daniel
  * Raquel
  */

  const exibirAprovados = aprovado => console.log(aprovado);

  aprovados.forEach(exibirAprovados);

  /**
  * Saída
  * 
  * Agatha
  * Aldo
  * Daniel
  * Raquel
  */
```

### 111. Foreach #02

[Arquivo](array/sforeach2.js)

```javascript
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
```