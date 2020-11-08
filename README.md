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

### 2. Repositório do Curso

[https://github.com/cod3rcursos/web-moderno](https://github.com/cod3rcursos/web-moderno)

### 3. Importância dos Fundamentos

### 4. Por que aprender JavaScript?

## Seção 2: Configuração do ambiente

### 5. Instalação Node (Windows/Mac)

Instalação a partir do [Site do Node](https://nodejs.org/en/)

### 6. Configuração do Editor (VSCode)

Instalação a partir do [Site do VSCode](https://code.visualstudio.com/)

### 7. Configuração do Comando 'code'

Caso não funcione o comando 'code' na , configurar no VSCode:

* Ctrl + Shift + P - Para mostrar todos os comandos
* Pesquisar por "code"
* Selecionar: shell command: install 'code' command in PATH

### 8. Instalação do VSCode (Windows)

## Seção 3: JavaScript: Fundamentos

### 9. Visão geral de Algoritmo

* **Algoritmo** - Sequência de passos finitos que desempenha uma função específica.
    * Pode conter repetição de algum passo ou conjunto de passos.
    * As repetições podem ser determinadas por um número definido de vezes ou no momento que uma condição deixar de ser verdadeira, por exemplo.
    * O Fluxo de um algoritmo também pode ser alterado a partir de uma condição, ou seja, podem haver dois conjuntos de códigos onde um será executado se a condição for verdadeira e outra se for falsa.
    * Para um Algoritmo estar correto e otimizado, a ordem dos passos deve estar corretas. Os mesmos passos porém em ordem diferente pode trazer ou resultados errados ou ineficientes.
    * O Algoritmo em um programa pode ser visto como o verbo, a ação que será realizada com um conjunto de dados. Assim o Algoritmo recebe uma quantidade de entradas e pode ou não gerar outro dado de saída.
    * Algoritmos podem ser representados através de fluxograma, linguagem natural (português, inglês, etc...), linguagem artificial (as linguagens de programação) e por pseudo-linguagens (Portugues estruturado, por exemplo).

### 10. Visão Geral de Estrutura de dados

* **Estrutura de Dados** - Visa organizar e administrar os dados.
    * **Estruturas de dados básicas (primitivas)** - Int, Real, Letra, Boolean e lista (Dependendo da linguagem)
    * **Variáveis e constantes** - são "espaços" da memória para armazenar dados. No caso das variáveis estes dados podem ser alterados no decorrer da execução do programa e no caso das constantes não.
    * **Operações** - Os dados poderão ser alterados através das operações, por exemplo: atribuição, aritméticas, relacional ou lógicas.

### 11. Configuração do Projeto

### 12. Organização Básica de um Código JS


* Um código JavaScript é composto por sentenças de códigos, blocos de código (composto por sentenças).

* [Arquivo](Fundamentos/organizacao.js)

```javascript
// Sentenças de código
console.log("sentença de código");

// Bloco de código
{
    {
        console.log("Olá");
        console.log("Mundo!");
    }

}
```

### 13. Executando JavaScript

### 14. Comentários de Código

* Os comentários servem para "Explicar" determinado trecho de código. Os comentários são ignorados no momento da execução do programa.
* No caso específico do JavaScript, estes textos são acessíveis ao usuário caso ele utilize alguma ferramenta para desenvolvedor.
* Evitar comentários óbvios e irrelevantes.

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

[Arquivo](Fundamentos/variaveisEConstantes.js)
```javascript
// Variáveis
var a = 3;
let b = 4;

var a = 30; // var permite que uma mesma variável seja redeclarada, embora não seja recomendado
b = 40; // let não permite redeclaração

console.log(a, b);

// Modificando os valores
a = 300;
b = 400;

console.log(a, b);

// Declarando uma constante e imprimindo seu valor
const c = 5;

console.log(c);
```

### 16. Tipagem Fraca

* **JavaScript** é uma linguagem de tipagem *fraca* ou *dinâmica*, assim não é necessário definir o tipo de dado que vai ser armazenado em uma variável ao instância-la e também ao longo da execução do programa, uma mesma variável poderá armazenar dados de tipos diferentes.

[Arquivo](Fundamentos/tipagemFraca.js)
```javascript
let qualquer = "Legal";
console.log(qualquer);
console.log(typeof qualquer);

qualquer = 3.1515;
console.log(qualquer);
console.log(typeof qualquer);

// Evitar nomes genéricos e siglas
let valor = "";
let numero = 1;
let pqp = false // Produto Químico Perigoso... kkk
```

### 17. Tipos em JavaScript: Number

[Arquivo](Fundamentos/numeros.js)
```javascript
const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
// Imprime se peso1 é inteiro
console.log(Number.isInteger(peso1));
// Imprime se peso2 é inteiro
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)

// toFixed() define o número de casas decimais
console.log(media.toFixed(2));
// toString() transforma um númerico em string
console.log(media.toString());
// toString(2) transforma um númerico em binário
console.log(media.toString(2));
console.log(typeof media);
console.log(typeof Number); // Isto é uma função!
```

### 18. Number: Alguns Cuidados

[Arquivo]()Fundamentos/numerosAlgunsCuidados.js
```javascript
console.log(7 / 0); // Retorna Infinity

console.log("10" / 2); // Realiza a operação
console.log('3' + 2); // irá concatenar como string, ou invés de realizar a soma

console.log("Show!" * 2); // Não funciona, retorna NaN (Not a Number)

console.log(0.1 + 0.7); // Não retorna 0.8 e sim 0.7999999999999999

// console.log(10.toString()); retorna um erro ao usar o número literal
console.log((10).toString()); // Desta forma funciona sem precisar armazenar o número em uma variável
```

### 19. Usando Math

* Objeto nativo da API do JavaScriupt que ajuda na realização de alguns cálculos

[Arquivo](Fundamentos/math.js)
```javascript
console.log(typeof Math); // Retorna objeto

/**
 * Apesar de anteriormente ser necessário utilizar o objeto Math
 * para realizar operações envolvendo potenciação, hoje pode-se
 * utilizar o "**" para realizar estes cálculos mais facilmente
 */
console.log(2**3);

const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);
console.log(area);
```

### 20. Tipos em JavaScript: String

* Pode ser delimitado por aspas simples (''), aspas duplas ("") ou backticks (simbolo da crase) (``).

[Arquivo](Fundamentos/strings.js)
```javascript
const escola = 'cod3r';

console.log(escola.charAt(4)); // retorna "r"
console.log(escola.charAt(5)); // retorna vazio, sem gerar erro, apesar do índice não existir
console.log(escola.charCodeAt(3)); // código Unicode para o 3
console.log(escola.indexOf('3')); // retorna o índice da string 3
console.log(escola.substr(1)); // retorna a string a partir do índice 1
console.log(escola.substr(0, 3)); // retorna a string do indice 0 até um antes do indice 3
console.log('Escola '.concat(escola).concat("!")); // conseguimos concatenar mesmo usando um valor literal
console.log(escola.replace(3, 'e')); // primeiro argumento é o indice que será substituido e o segundo é a string
console.log('Ana,Maria,Pedro'.split(',')); // transforma a string em Array, utilizando o separdor passado por parâmetro
```

### 21. Usando Template String

* Recurso adicionado no ES2015.
* Visa facilitar a concatenação de strings e variáveis.
* Permite a utilização de quebra de linha

[Arquivo](Fundamentos/templateString.js)
```javascript
const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';

console.log(concatenacao);

const template = `
Olá
${nome}!
`;
console.log(template);

// Suporta expressões

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);
```

### 22. Tipos em JavaScript: Boolean

* JavaScript possui um comportamento especial em relação aos valores booleanos, suportando outros valores além do *true* e *false*.

[Arquivo](Fundamentos/booleanos.js)
```javascript
let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 2; // Qualquer valor diferente de 0 representa true
console.log(!!isAtivo);

isAtivo = 0; // representa o false
console.log(!!isAtivo);

console.log("\nOs valores verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("\nOs valores falsos...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('para finalizar...');
console.log(!!('' || null || 0 || ' ')); // retorna true
```

### 23. Tipos em JavaScript: Array

* Estrutura unidirecional para agrupar vários valores dentro de uma estrutura de dados.
* Seus valores são acessados através do índice, iniciando sempre no 0 (zero).
* Em JavaScript o array **não** possui tamanho fixo e seus dados podem ser **heterogêneos** (de tipos diferentes).

[Arquivo](Fundamentos/array.js)
```javascript
const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]);
console.log(valores[4]); // Indice não existe, retorna undefined

valores[4] = 10;
console.log(valores);

console.log(valores.length); // retorna a quantidade de itens do array

valores.push({id: 3}, false, null, 'teste'); // função push adiciona elementos ao array

console.log(valores);

console.log(valores.pop()); // retira último elemento do array e retorna elemento retirado

delete valores[0] // deleta o elemento do array, preservando o índice dos demais elementos
console.log(valores);

console.log(typeof valores); // Array em JavaScript é um Objeto
```