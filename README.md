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

### 38. Par Nomme/Valor

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

[Arquivo]()

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

P | Q | P *E (&&)* Q
--|---|----------
V | V | V
V | F | F
F | V | F
F | F | f

P | Q | P *ou (||)* Q
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

P | ~P *(!)*
--|---
V | F 
F | V 

* O **OU exclusivo** pode ser simulado com o operador de diferente ```!=``` apesar de existir o operador bitwise (^) - Operador bit a bit, este é mais indicado para situações de comparação entre valores numéricos.

[Arquivo]()

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