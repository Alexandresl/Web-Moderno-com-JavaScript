### Seção 3: Javascript: Fundamentos

#### 10. Visão Geral de Algoritmo

O conceito de algoritmo é importante independente da linguagem de programação que se pretenda usar. Além disso, temoas a estrutura de dados, que junto com o algoritmo formam o fundamento para qualquer linguagem.

O algoritmo seria o verbo, ação, o processar de um programa. A estrutura de dados é o que vai organizar os dados.

Um algoritmo é uma sequência de passos. Podemos imaginar os passos para se deslocar de casa até o trabalho ou para se fazer um pudim.

No algoritmo você também poderá repetir uma sequência de passos até que uma condição seja satisfeita ou mesmo uma quantidade de vezes pré-definidas. Digamos que você tenha uma pilha de documentos para assinar, você pegará um documento e assinará, pegará um segundo documento e realizará a mesma ação, até que não haja mais documento a ser assinado.

O algorítmo também permite que você tome decisão. Assim eu tenho um passo A que só será executado caso uma condição seja satisfeita, ou mesmo, um passo B sendo executado caso a condição para o Passo A não seja satisfeita.

É importante notarmos que além de ter uma sequência de passos definidas, para que o algoritmo seja correto e otimizado, é importante que os passos estejam na sequência correta. Por exemplo, se assarmos um bolo e depois tentarmos misturar o fermento, acabaremos por não obter o resultado esperado, assim como em inúmeras outras situações.

Para termos uma visão geral do algoritmo. teremos dados de entrada, que servirão para alimentar o nosso algoritmo, que irá processar conforme as instruções contidas e irão produzir uma saída.

#### 11. Visão Geral de Estruturas de Dados

As estruturas de dados visam organizar e administrar os dados. Por exemplo, se temos uma lista de aprovados, a lista seria o que estrutura os meus dados, que neste caso são de aprovados.

Além da lista, temos como exemplo a fila como estrutura de dados. Nela temos como regra o FIFO (First In First Out). 

Outra estrutura comum é a pilha, que usa como regra o LIFO (Last In First Out).

Temos a estrutura de árvore. como exemplo o sistema de arquivos dos sistemas operacionais. tabelas

Como estruturas básicas temos os tipos. Por exemplo: int, real, letra, boolean. Assim como você pode criar estruturas personalizadas, como uma para representar o cliente, o carrinho de compras ou um produto. Estas poderão ter outras estruturas de dados internamente.

Outro conceito importante é o de variáveis e constantes. Assim se quisermos guardar o resultado de um cálculo, iremos criar uma variável. Agora, se quisermos guardar o valor do &pi;, que não irá ser alterado, iremos declará-lo em uma constante.

Iremos utilizar os dados também para realizar operações. Estas poderão ser de atribuição, aritmética, relacional ou lógica. poderemos realizar operações com estruturas de dados também. Por exemplo, unificarmos duas listas de dados.

#### 12. Organização Básica de um Código JS

Uma das primeiras perguntas que eu faço ao aprender uma nova linguagem de programação é como ela é, de forma mais básica. Assim, depois poderemos nos preocupar com como é estruturada uma aplicação completa, que muitas vezes poderá ter várias respostas, dependendo do programador que é questionado.

O **JavaScript** é uma linguagem derivada da linguagem **C**. Do ponto de vista de organização básica, ela é organizada em blocos de código, que são agrupamentos de sentenças de código.

Devemos ter claro que uma sentença não necessáriamente é uma linha de código. Assim como no português uma sentença termina com um ponto e não necessáriamente está contida em apenas uma linha, a sentença no javascript também pode ocupar uma ou mais linhas de código.

Por exemplo, a seguir temos uma sentença de código em Javascript

Arquivo: [organizacao.js](../fundamentos/organizacao.js)

```javascript
    console.log("Sentença de código")
```
Podemos ter também um bloco de código, que são delimitados por chaves, e que poderá conter várias sentenças de código ou mesmo outros blocos de código conforme exemplo abaixo:

```javascript
{
    {
        console.log("Olá ") // 1ª sentença
        console.log(
            'Mundo!'
        ) // 2ª sentença
    } // bloco de código interno a outro bloco
} // bloco de código
```
No bloco acima eu tenho duas sentenças de código e dois blocos de códigos.

Assim, podemos, de forma básica, definir que o JavaScript é composto por sentenças de código que podem ou não terminar com ponto e vírgula e por blocos de código de códigos que são delimitados por chaves.

#### 13. Configuração do Projeto

Nosso curso será estruturado com uma pasta para cada capítulo e um arquivo javascript por aula. Em alguns exemplos mais complexos poderemos criar vários arquivos e algumas subpastas, mas, em geral, esta será a estrutura.

#### 14. Executando JavaScript

Vamos conhecer as várias formas de executar o javascript. Você pode utilizar ferramentas online, o console do browser, o node, ou mesmos os editores de códigos como o Sublime, Atom e o VSCode, possuem terminais para execução do javascript (em conjunto com o node).

Como alternativas online temos: <https://repl.it/languages/nodejs> e o <https://jsfiddle.net/>

Para utilizar o console do Chrome por exemplo, basta digitar Ctrl + Shift + i ou para Mac Command + Shift + i.

No VSCode podemos utilizar o comando Ctrl + Shift + ' para abrir o terminal ou no Mac Command + ', ou com a utilização do plugin Code Runner, executar o script com o comando Ctrl (ou no mac Command) + Alt + n.

Podemos também utilizando o comando node nomedoarquivo.js executar no próprio terminal do sistema operacional

#### 15. Comentários de Código

Arquivo: [comentario.js](../fundamentos/comentario.js)

Os comentários em JavaScript são os mesmos da linguagem C e Java (apesar de java possuir um a mais). Os comentários são importantes para explicar partes do código ou por que o código executa determinada função. Todos estes textos serão ignorados na hora da execução do programa.

Segue abaixo a forma de criar comentários em **JavaScript**:

```javascript
// Comentários de uma linha
console.log("linha 1")

/*
    Comentário de 
    múltiplas linhas
*/
console.log("linha 2")

/**
 * Outra forma
 * de criar 
 * comentários de
 * múltiplas linhas
 */
console.log("linha 3");
```

É importante salientar, que os comentários deverão ser adotados de forma consciente. Evitando comentar coisas óbvias do código. Nestes casos, é fundamental que o código seja suficientemente legível, no que refere-se a nome de variáveis, nome de funções, a se utilizar comentário para especificar o que faz uma função x ou uma linha de código y.

Neste curso, porém, abriremos uma exceção, e para fim didático, utilizaremos bastante comentário, mesmo os óbvios 😃.

#### 16. O Básico de Var, Let e Const

Arquivo: [variaveisEConstantes.js](../fundamentos/variaveisEConstantes.js)

Neste capítulo iremos falar sobre variáveis e constantes. O mundo da programação pode ser dividido, de forma bem simplista assim: você tem dados que são processados e geram mais dados. Então temos os algoritmos que são utilizados para realizar o processamento que na maioria das vezes utilizam dados armazenados em variáveis e constantes e os dados que são organizados em estruturas de dados. Cabe à estrutura de dados definir as regras que os dados vão seguir.

Aqui vamos aprender como criar variáveis e constantes em JavaScript. Nesta aula não iremos nos aprofundar nas diferenças entre var, let e const.

Históricamente, no javascript, sempre se utilizou a palavra *var* para criar variáveis. Recentemente, com ECMAScript 2015, foram introduzidas as palavras *let* e *const*, que iremos detalhar futuramente.

```javascript
/**
 * var - palavra reservada que usamos
 * para a declaração da variável;
 * let - outra palavra reservada para
 * declaração de variável;
 * a, b - é o nome (identificador)
 * destas variáveis;
 * = - é um comando de atribuição
 * assim o 3 está sendo atribuído
 * a variável a.
 */
var a = 3
let b = 4

var a = 30
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// c = 50 - Isso gera erro!

console.log(c);
```

*Obs.: Mesmo não sendo o foco neste momento, é importante já ter em mente, que a escolha do nome é um ponto muito importante para a legibilidade de seu código. Prefira nomear variáveis com nomes que facilmente identifiquem o conteúdo que é armazenado.*

Após declararmos uma variável, nós não precisamos utilizar as palavras reservadas *var* ou *let* novamente. Podemo apenas utilizar a variável lendo ou gravando novos valores nela. Apesar disso, no exemplo é redefinido o valor da variável *a* utilizando o var. Por mais estranho que possa parecer, não irá gerar um erro. Já no caso do let, caso tentássemos redeclará-lo, o interpretador acusaria um erro de sintaxe.

No exemplo, vimos que o const, também serve para armazenar valores, só que neste caso, nós não podemos redeclará-lo. É sempre aconselhável que quando formos declarar valores que não vão ser alterados durante a execução do programa que utilizemos o *const* ao invés do *let*.

#### 17. Tipagem Fraca

Quando uma nova linguagem é desenvolvida, uma das decisões fundamentais de quem está desenvolvendo tal linguagem, é como ela vai lidar com os tipos dos dados. Isso significa que na construção de um algoritmo, nós trabalhamos com vários tipos de dados: números inteiros, números de ponto flutuante, um caractere, um conjunto de caracteres, entre outros. Algumas linguagens precisam que você defina na hora da declaração que tipo de dado você irá armazenar em determinada variável, outras, permite que o tipo de dado possa ser alterado durante a execução do programa.

O *JavaScript* é uma linguagem fracamente tipada ou de tipagem dinâmica. Isso significa que não precisamos definir que tipo de dado cada variável irá armazenar no momento de sua declaração. Esta característica, por um lado, permite ao programador uma maior liberdade na hora de programar, contudo, pode ser difícil detectar determinados erros por conta desta mesma característica da linguagem.

No exemplo abaixo, vamos ver como funciona a questão da tipagem fraca em JavaScript.

Arquivo: [tipagemFraca.js](../fundamentos/tipagemFraca.js)

```javascript
let qualquer = 'legal'
console.log(qualquer);
console.log(typeof qualquer);

qualquer = 3.1516
console.log(qualquer);
console.log(typeof qualquer);

// Evitar nome genérico e siglas
let valor = ''
let numero = 1
let pqp = false // Produto Químico Perigoso... kkk
```

Podemos observar com o exemplo que, embora a tipagem do JavaScript seja fraco, isso não significa que ela não possua tipo. Ao utilizarmos o comando **typeof**, temos como retorno o tipo de dado que a variável está armazenando.

Salientamos novamente o cuidado de colocar bons nomes para variáveis, evitando nomes genéricos e siglas.

#### 18. Tipos em JavaScript: Number

Já vimos que o javaScript possui tipagem fraca. Vimos também que para declarar uma variável ou uma constante, utilizamos as palavras reservadas var, let e const e nelas poderemos armazenar muitos tipos de dados.

Nesta aula, nós começaremos a falar de alguns tipos importantes. O primeiro tipo é o *numérico* ou *number*.

Arquivo: [numeros.js](../fundamentos/numeros.js)

```javascript
/**
 * Declaramos uma constante
 * com o identificador peso1
 * que irá receber um número
 * de ponto flutuante
 */
const peso1 = 1.0

/**
 * Podemos declara utilizando
 * um objeto do tipo Number
 * que iremos estudar futuramente
 */
const peso2 = Number('2.0')

console.log(peso1, peso2)
/**
 * Number.isInteger() retorna 
 * um boolean true caso o 
 * parâmetro seja inteiro
 */
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

/**
 * toFixed() define o número de casas
 * decimais que será considerado de um
 * número de ponto flutuante
 */
console.log(media.toFixed(2))

/**
 * Em algumas situações poderemos querer
 * converter um number em string. Podemos
 * fazer isso utilizando a função
 * toString()
 */
console.log(media.toString())

/**
 * Caso queiramos converter o valor de
 * média para binário, basta passar o 
 * 2 como parâmetro.
 */
console.log(media.toString(2))

/**
 * Podemos também testar o tipo de dado
 * da variável com o typeof.
 */
console.log(typeof media)

/**
 * Devemos ter presenque que number
 * é um tipo de dado e que Number,
 * com letra maiúscula é uma função,
 * conforme retorno abaixo.
 */
console.log(typeof Number);
```

No exemplo acima, embora as constantes 1.0 e 2.0 tenham o ponto, elas são consideradas um number do tipo inteiro. Isso pode ser verificado utilizando a função Number.isInteger().

Vimos também como realizar alguns cálculos simples utilizando estas constantes. Como definirmos o número de casas decimais a ser exibido em uma número de ponto flutuante ou mesmo como realizar a conversão de um número em outros sistemas numéricos, como o binário, octal ou hexadecimal.

E por fim, vimos a diferença entre o tipo de dado *number*, que pode ser tanto um inteiro quanto um número de ponto flutuante e a Função *Number*

#### 19. Number: Alguns Cuidados

Antes de nós passarmos para outro tipo, vamos ver alguns cuidados que você precisa ter com relação aos valores numéricos.

Arquivo: [numerosAlgunsCuidados.js](../fundamentos\numerosAlgunsCuidados.js)

```javascript
// Exemplo 1
console.log(7 / 0)
```

No exemplo 1 nós temos o resultaedo de 7 dividido por 0. Isso na matemática pode ser representado pelo infinito, já que quanto mais se aproxima de 0 o número pelo qual eu estou dividindo maior este número fica. Exemplos:

```javascript
console.log(7 / 0.0001) // resultado 70.000
console.log(7 / 0.000000000001) // resultado 7.000.000.000.000
```
No JavaScript o resultado de **7 / 0** retorna o tipo Infinity. Isso é uma peculiaridade, já que em grande parte das linguagens isso geraria um erro.

Outra operação estranha em decorrência de que o JavaScript é uma linguagem fracamente tipada é o que vemos no exemplo 2:

```javascript
// Exemplo 2
console.log("10" / 2)
```

Temos um valor que é uma string sendo dividido por 2. Essa situação também seria um problema em grande parte das linguagens geraria um erro. Porém, JavaScript, por ser fracamente tipada, essa operação retorna 5.

É importante observar que tal situação só retorna um número, em razão de que o conteúdo da string, pode ser convertido para um *number*. Caso contrário, se tivéssemos uma letra na string por exemplo. A operação retornaria NaN (Not A Number).

O exemplo 3 ilustra o que comentamos no parágrafo anterior. caso tenhamos uma string multiplicada por dois, ao invés de retornar a string duas vezes, no JavaScript, essa operação retorna NaN.

```javascript
// Exemplo 3
console.log("Show! " * 2)
```
O exemplo 4 mostra uma soma de números com ponto flutuante. Nela eu somo 0.1 + 0.7 o que deveria retornar 0.8. Isso, porém, gera o número 0.7999999999999999. Tal resultado ocorre em razão da especificação do javascript ANSI/IEEE, que para conseguir realizar o cálculo mais rapidamente, assim, a possibilidade de apresentar estes tipos de inconsistências.

```javascript
// Exemplo 4
console.log(0.1 + 0.7)
```

No exemplo 5, ao tentar realizar a conversão de um inteiro para string utilizando o método *toString()*, temos como resultado um erro:

```javascript
// Exemplo 5
console.log(10.toString());
```

Issa acontece por não conseguirmos, realizar a conversão de um inteiro literal. Para podermos realizar tal operação poderíamos utilizar o dez entre parênteses:

```javascript
// Exemplo 5
console.log((10).toString());
```

<!--
20. Usando Math
21. Tipos em JavaScript: String
22. Usando Template Strings
23. Tipos em JavaScript: Boolean
24. Tipos em JavaScript: Array
25. Tipos em JavaScript: Object
26. Entendendo o Null & Undefined
27. Quase Tudo é Função!!!
28. Exemplos Básicos de Funções #01
29. Exemplos Básicos de Funções #02
30. Declaração de Variáveis Com Var #01
31. Declaração de Variáveis Com Var #02
32. Declaração de Variáveis Com Let
33. Usando Var em Loop #01
34. Usando Let em Loop #01
35. Usando Var em Loop #02
36. Usando Let em Loop #02
37. Entendendo o Hoisting
38. Função Vs Objeto
39. Par Nome/Valor
40. Notação Ponto
41. Operadores: Atribuição
42. Operadores: Destructuring #01
43. Operadores: Destructuring #02
44. Operadores: Destructuring #03
45. Operadores: Destructuring #04
46. Operadores: Aritméticos
47. Operadores: Relacionais
48. Operadores: Lógicos
49. Operadores: Unários
50. Operadores: Ternário
51. Contexto de Execução: Browser vs Node
52. Tratamento de Erro (Try/Catch/Throw) -->
[<< Voltar ao índice](../README.md)