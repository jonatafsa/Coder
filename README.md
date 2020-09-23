# Coder

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Coder, atualmente é uma plataforma de cadastro validação de dados Formulário(front-end) e via servidor(back-end).

  - Sample page - Página de introdução em React
  - Página de cadastro em React
  - Página de Usuário em React

# Em breve

  - Validação de E-mail via NodeJS
  - Validação de usuários vida Patterns(Build)
  - Página de postagens para usuários cadastrados
  - Aplicação em Mobile usando React native

Você também poderá:
  - Gerenciar dados de cadastro e postagens
  - Curtir postagens de outros usuários

Coder é um projeto inspirado e desenvolvido através da NLW#2 da [Rocketseat], que foi uma experiêcnia incrível e imersiva de aprendizado e desenvolvimento.

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.


### Tech

Principais tecnoligias usadas no projeto:

* [ReactJS] - Framework aprimorado para aplicativos da web.
* [NodeJS + Npm] - JavaScript runtime.
* [Express] - node.js framework para estrutura de rede.
* [SQLite] - SQLite é uma biblioteca em linguagem C que implementa um banco de dados SQL embutido.
* [yarn] - Gerenciamento de Pacotes.
* [Axios] - O Axios é um promise-based, o que lhe dá a capacidade de tirar proveito do JavaScript [asynce await] de um código assíncrono mais legível.
* [Knex] - Um SQL Query Builder para Javascript
* [Mobile First] - Conceito aplicado em projetos web onde o foco inicial da arquitetura e desenvolvimento é direcionado aos dispositivos móveis.
* [SPA] - Método de desenvolvimento que consiste de uma única página web com o objetivo de fornecer uma experiência do usuário similar à de um aplicativo desktop.

E como principal linguagem de desenvolvimentpo, o Typescript.

### Installation

Coder requer [Node.js](https://nodejs.org/) v4+ para rodar.

Instale as dependências e devDependencies e inicie o servidor.

```sh
$ cd web
$ npm install -d
$ npm start
```

Inicie um banco de dados .

```sh
$ cd web
$ npm install -d
$ npm start
```

### Plugins

Coder está atualmente com os seguintes plugins. As instruções sobre como usá-los em seu próprio aplicativo estão no link abaixo.

| Plugin | README |
| ------ | ------ |
| react-phone-input-2 | <https://github.com/bl00mber/react-phone-input-2> |
|  Axios | <https://www.npmjs.com/package/axios> |
|  Knex | <http://knexjs.org> |
|  SQLite | <https://www.sqlite.org/index.html> |


### Desenvolvimento

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version} .
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [Rocketseat]: <https://rocketseat.com.br>
   [express]: <http://expressjs.com>
   [ReactJS]: <https://pt-br.reactjs.org>
   [SQLite]: <https://www.sqlite.org/index.html>
   [NodeJS + Npm]: <https://nodejs.org/en>
   [yarn]: <https://yarnpkg.com>
   [Axios]: <https://www.npmjs.com/package/axios>
   [Knex]: <http://knexjs.org>
   [Mobile First]: <https://blog.apiki.com/mobile-first-o-conceito-e-sua-aplicabilidade>
   [Spa]: <https://en.wikipedia.org/wiki/Single-page_application#:~:text=From%20Wikipedia%2C%20the%20free%20encyclopedia,browser%20loading%20entire%20new%20pages.>


   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
