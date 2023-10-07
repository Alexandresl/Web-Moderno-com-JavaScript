# Web-Moderno-com-JavaScript

- [Web-Moderno-com-JavaScript](#web-moderno-com-javascript)
  - [Seção 1: Introdução Curso Desenvolvimento Web](#seção-1-introdução-curso-desenvolvimento-web)
    - [1. Visão geral do Curso Desenvolvimento Web](#1-visão-geral-do-curso-desenvolvimento-web)
    - [2. Repositório do curso](#2-repositório-do-curso)
    - [3. Boas práticas do suporte](#3-boas-práticas-do-suporte)
    - [4. Importância dos fundamentos](#4-importância-dos-fundamentos)
    - [5. Por que aprender Javascript?](#5-por-que-aprender-javascript)
    - [6. Usando o terminal](#6-usando-o-terminal)
    - [7. Terminais](#7-terminais)
  - [Seção 2: Configuração do ambiente](#seção-2-configuração-do-ambiente)
    - [8. Aviso importante aos usuários Windows](#8-aviso-importante-aos-usuários-windows)
    - [9. Instalação Node (Windows / Mac)](#9-instalação-node-windows--mac)
    - [10. Instalar o Node e o Visual Studio Code no Linux](#10-instalar-o-node-e-o-visual-studio-code-no-linux)
    - [11. Configuração do editor (VSCode)](#11-configuração-do-editor-vscode)
    - [12. Como abrir os terminais nos sistemas operacionais](#12-como-abrir-os-terminais-nos-sistemas-operacionais)
    - [13. Configuração do comando 'code'](#13-configuração-do-comando-code)
    - [14. Instalação do VSCode (Windows)](#14-instalação-do-vscode-windows)
  - [Seção 3: Iniciando com programação](#seção-3-iniciando-com-programação)
    - [15. Introdução do módulo](#15-introdução-do-módulo)
    - [16. Conhecendo o Visual Studio Code](#16-conhecendo-o-visual-studio-code)
    - [17. Sentença de código #1](#17-sentença-de-código-1)
    - [18. Sentença de código #02](#18-sentença-de-código-02)
    - [19. Comentários de código](#19-comentários-de-código)
    - [20. Blocos de código](#20-blocos-de-código)
    - [21. Desafio sentença e bloco](#21-desafio-sentença-e-bloco)
    - [22. Desafio sentença e bloco - Resposta](#22-desafio-sentença-e-bloco---resposta)

## Seção 1: Introdução Curso Desenvolvimento Web

### 1. Visão geral do Curso Desenvolvimento Web

* Seções:
  * 01 - Visão Geral
  * 02 - Configuração do Ambiente
  * 03 - Fundamentos
  * 04 - Estruturas de Controle
  * 05 - Funções
  * 06 - Objetos & OO
  * 07 - Array
  * 08 - Node
  * 09 - ES Next... 6, 7, 8
  * 10 - Fundamentos da Web
  * 11 - HTML
  * 12 - CSS
  * 13 - DOM
  * 14 - Ajax
  * 15 - Gulp
  * 16 - Webpack
  * 17 - jQuery
  * 18 - Bootstrap
  * 19 - React
  * 20 - Vue
  * 21 - Banco de dados relacionais
  * 22 - Banco de dados não relacionais
  * 23 - express
  * 24 - Integrando banco de dados
  * 25 - Projetos
  * 26 - Outros tópicos
  * 27 - Conclusão

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/e6429ff10991fed8f9af077b3b53196bca89ba2a)

### 2. Repositório do curso

Todos os exercícios e projetos estão em [https://github.com/cod3rcursos/web-moderno](https://github.com/cod3rcursos/web-moderno)

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/d2fac4c4d18496bdf03d62275e97ef5fab22b10c)

### 3. Boas práticas do suporte

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/d767848f25522b40205ccc20c00e96f811785326)

### 4. Importância dos fundamentos

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/62dc43d2f7db73c4bc8f190ee61225b576a69e32)

### 5. Por que aprender Javascript?

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/1e281211dd90a6dd1352d542f39316a086a65ad5)

### 6. Usando o terminal

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/5bf7486d4382a0d96382831f3164cc658deb0a45)

### 7. Terminais

Venho passar uma dica rápida e super importante pra quem tá iniciando na área de programação agora. Essa dica serve para qualquer ambiente ou curso que você vá fazer.


O terminal do seu sistema operacional, seja ele Windows, Linux ou Mac, é super importante. É uma ferramenta importante de ser dominada e que será utilizada em qualquer ambiente de qualquer linguagem ou tecnologia. Vou deixar aqui links para os posts feitos lá no Blog da Cod3r sobre esse assunto.

Caso vocês não saibam muito sobre os terminais ou se tiverem dúvidas sobre o assunto, recomendo que deem uma olhada.

Windows -> https://blog.cod3r.com.br/terminal-no-windows/

Linux/Mac -> https://blog.cod3r.com.br/terminal-no-macos-e-linux/

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/73e3bba113544c1a4ec62388d1fdae310e56dda2)

## Seção 2: Configuração do ambiente

### 8. Aviso importante aos usuários Windows

Fala galera! Tranquilo?

Antes de mais nada, recomendamos que vocês utilizem sempre a versão mais atualizada possível do Windows, ou seja, o Windows 10. Pois diversas tecnologias não dão mais suporte aos Windows 7, 8 ou 8.1, então caso vocês utilizem alguma dessas versões, vocês vão acabar tendo problemas em algum ponto do curso. A recomendação é utilizar o Windows 10.

Venho também dar uma outra dica super rápida porém super importante para todos que irão dar início às atividades do curso no ambiente Windows. O que acontece é que existem duas configurações padrão que vêm ativadas e acabam dificultando ou gerando erros na hora de programar em qualquer ambiente. Vou explicar rapidinho sobre elas e sobre como lidar com isso.

Na programação é super normal utilizar os caminhos absolutos de localizações na sua máquina em diversos momentos. Às vezes você mesmo utiliza, mas em geral as linguagens utilizam ali por debaixo do panos para que possam ser executadas. Esses caminhos são literalmente "c/users/seuNome/pasta" e tudo mais.

O primeiro problema é relacionado a Área de Trabalho, pois em alguns casos ela entra nesse caminho absoluto com seu nome em português, ou seja, com espaços e acentos. E isso acaba gerando erro em diversos ambientes. A forma de se lidar com isso é bem simples, basta criar seu projeto em outra pasta que não seja a Área de Trabalho.

O segundo problema é relacionado ao OneDrive. Nas versões mais recentes do Windows o OneDrive é ativado por padrão e ele acaba deixando todas as pastas e arquivos criados no seu computador como arquivos em nuvem, ao invés de arquivos locais. Isso também acaba gerando erros em alguns ambientes. Para resolver isso é simples, basta desativar o OneDrive para a pasta do seu projeto ou desativar geral mesmo. Você escolhe.

Bons estudos galera!

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/394827cdc69b55d9ce888d18aa2ac79fdee0669c)

### 9. Instalação Node (Windows / Mac)

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/b465fd0dd9c72eb826f9334b8a7ca582a756977d)

### 10. Instalar o Node e o Visual Studio Code no Linux

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/09808acb6c58b1e246904713ce1fa9c08c051fb9)

### 11. Configuração do editor (VSCode)

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/23fd005de373eea2db525be1013ab374ace4d82b)

### 12. Como abrir os terminais nos sistemas operacionais

Fala, galera! Tudo bom?

Recebemos comentários sobre alunos que não sabiam como abrir os terminais usados na aula seguinte, então resolvemos explicar como fazer isso.

A primeira opção para abrir o terminal em qualquer sistema operacional que estejam usando seja MacOS, Windows ou Linux é a de usar a barra de pesquisa e procurar por termos como prompt (para Windows) ou terminal (para Linux ou MacOS).

Outra opção é o uso de atalhos de teclado. Para abrir o Prompt de Comando no Windows, vocês podem usar Tecla Windows + R e digitar cmd; para o Linux, podem abrir o terminal usando Ctrl + Alt + T; no MacOS podem usar COMMAND + ESPAÇO e digitar terminal para abrir.

Para abrir aquela janela de pesquisa no VSCode, o comando é Ctrl + Shift + P.

Espero que essas dicas sejam úteis para vocês, visto que os prompts serão usados novamente em aulas futuras.

Ah, aproveito para reiterar: o comando code vem por padrão em Windows, então se a opção de editar no VSCode não aparecer para vocês, não se assustem!

Bons estudos e até a próxima!

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/85d0f7765c74db0c3dfed3a13b73c5b66946b85c)

### 13. Configuração do comando 'code'

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/b8f047ce6e9f42755bced2d54e139b88578663c9)

### 14. Instalação do VSCode (Windows)

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/e30f6497377a9a7f5630b68813c37fea5cddd6de)

## Seção 3: Iniciando com programação

### 15. Introdução do módulo

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/b3a6e635bc304cf94b3dc436999eb08ba5a7f25b)

### 16. Conhecendo o Visual Studio Code

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/b56a51d201d581b684a09c625fa50aa29579574e)

### 17. Sentença de código #1

```js
// Sentença de código
console.log("Bom dia!");
console.log("Boa tarde!");
console.log("Boa noite!");
```

[Arquivo](fundamentos/inicio/sentenca_1.js)

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/aaa528632d1337ec9afb728152d44186f7014e0b)

### 18. Sentença de código #02

```js
console.log("Passo #03");
console.log("Passo #01");
console.log("Passo #02");
```

[Arquivo](fundamentos/inicio/sentenca_2.js)

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/ead1c8cdbacd81c2a946e20335f9fb13678a6dda)

### 19. Comentários de código

```js
// Console.log é usado para exibir algo na tela do computador!
console.log("Passo #03");
console.log("Passo #01"); // mais um exemplo de console.log
// console.log("Passo #02");

/**
 * Este é um
 * comentário
 * de múltiplas
 * linhas
 */

console.log("Passo #02");
```

[Arquivo](fundamentos/inicio/comentario.js)

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/b6437ffff99a628e9a2d8bb99883c899098a2201)

### 20. Blocos de código

```js
{
	console.log("Passo #01");
	console.log("Passo #02");
	console.log("Passo #03");
}

{
	console.log("Passo #04");
	console.log("Passo #05");
}

{
	{
		{
			{
				;
				;
				;
			}
		}
	}
}

console.log("Fim");
```

[Arquivo](fundamentos/inicio/bloco.js)

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/306a8b36e624741e15e009546f6985c89c2e2d54)

### 21. Desafio sentença e bloco

```js
/**
 * // bloco do números ímpares
 * 1
 * 3
 * 5
 * 7
 * 9
 * 
 * // Bloco dos números pares
 * 2
 * 4
 * 6
 * 8
 * 
 */

{
	console.log(1);	
	console.log(3);	
	console.log(5);	
	console.log(7);	
	console.log(9);	
}

{
	console.log(2);
	console.log(4);
	console.log(6);
	console.log(8);
	console.log(10);
}
```

[Arquivo](fundamentos/inicio/desafio_sentenca_bloco.js)

[Commit](https://github.com/Alexandresl/Web-Moderno-com-JavaScript/commit/cb02411fac0188a8bd5cc0d3abf4a1553be5fbee)

### 22. Desafio sentença e bloco - Resposta

[Arquivo](fundamentos/inicio/desafio_sentenca_bloco_resposta.js)

[Commit]()