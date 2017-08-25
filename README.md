# Documentação

## Sobre

O projeto é uma agenda SPA (Single Page Application), construída com AngularJS 1.6, que consome uma lista de contatos de uma API REST.

O AngularJS utiliza a arquitetura MVW (Model-View-Whatever), focado em, principalmente, separar a View (UI) e o Model (Dados), melhorando assim a escabilidade e testabilidade de uma aplicação.

## Decisões

Optei por utilizar o generator front-end chamado Yeoman, que é composto por 3 ferramentas:

*   YO – Conjunto de geradores que nos permite prototipar
*   Gulp – Gerencia tarefas de forma automatizadas
*   Bower – Gerencia dependências aplicadas no projeto

[[Leia mais aqui]](https://tableless.com.br/em-um-relacionamento-serio-com-generators-front-end-parte-2/)

Ao invés de utilizar o GruntJS, foi utilizado o Gulp, por ser mais moderno e mais rápido.  
[[Leia mais aqui]](https://jaysoo.ca/2014/01/27/gruntjs-vs-gulpjs/)

## Instalação

Primeiramente você deve clonar e startar a API [github.com/gabrielqmatos88/contatos-api](https://github.com/gabrielqmatos88/contatos-api)

Depois clone o repositório com o comando git clone [https://github.com/lucasbrelaz/agenda](https://github.com/lucasbrelaz/agenda)

Navegue até o diretório e faça os comandos a seguir para instalar as dependências:

*   npm install
*   bower install
*   gulp serve

Certifique-se de ter o gulp e bower instalados em sua máquina. Caso contrário, rode o seguinte script:

*   npm install -g gulp gulp-cli bower