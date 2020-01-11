### Seção 2. Configuração do ambiente

#### 6. Instalação Node (Windows/Mac)

Download do executável a partir do <https://nodejs.org/en/>

Neste momento estou instalando a versão - 12.13.1 LTS.

Para instalar basta seguir o wizard do executável.

Para testar basta digitar no terminal **node --version** que deverá retornar a versão instalada. Você poderá também verificar a versão do NPM, que é instalado junto com o Node. Para isso basta digitar no terminal **npm --version**.

No caso da versão **12.13.1** do node, é instalada a versão **6.12.1** do NPM.

#### 7. Configuração do Editor (VSCode)

No curso iremos utilizar o editor de texto Visual Studio Code, ou VSCode como é mais conhecido.

O download pode ser feito através do <https://code.visualstudio.com> para todas as plataformas.

Você poderá abrir o editor a partir do terminal. Basta entrar na pasta desejada e utilizar o comando **.code**, assim abrirá o editor na pasta atual.

Após a instalação do VSCode, você deverá instalar um plugin chamado **Code Runner**. Com ele poderemos testar os scripts diretamente no VSCode utilizando o atalho **Ctrl + Alt + N** ou no próprio pronpt do editor utilizando o comando **node nomedoarquivo.js**. Por trás dos panos ele irá utilizar o Node para executar o script.

#### 8. Configuração do Comando 'code'

Nem sempre o comando **node** estará disponível no terminal. No Windows, por exemplo, dependendo da forma como o software foi instalado, o comando não estará disponível.

Caso isso ocorra, basta, estando com o software digitar Ctrl + Shift + p, no Windows ou Linux, ou Command + Shift + p no Mac. abrirá uma janela e você deverá digitar **code** e escolher a opção "Shell Command: Install 'code' command in PATH". Basta fechar e abrir o prompt para que o commando esteja disponível.

#### 9. Instalação do VSCode (Windows)

É mostrado a instalação do VSCode para Windows. Para isso, basta seguir o wizard de instalação. Apenas no momento de seleção dos "Additional Tasks", que devemos confirmar a seleção das opções: "Add to PATH" para termos acesso ao comando code no terminal. Eu também costumo deixar marcado todas as outras opções a fim de disponibilizar também as opções "Open with Code" em arquivos e pastas e também registrar os tipos de arquivos suportados para abrir automaticamente pelo VSCode.

[<< Voltar ao índice](../README.md)
