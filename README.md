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

* Objetos em java é um conjunto de chave / valor

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