### Tecnologias Utilizadas:
 - React
 - TypeScript
 - Styled Components
 - Docker

### Configuração (Sem Docker)

* O projeto necessita tando do `node.js` e `yarn`para ser executado,
caso não tenha em sua máquina, acesse os links abaixo:
    * node.js: [Baixar node.js](https://nodejs.org/pt-br/download/)
    * yarn: [Baixar yarn](https://legacy.yarnpkg.com/en/docs/install/#mac-stable)
    
* Logo após a etapa de instalação, basta entrar na pasta do projeto e rodar o comando
`yarn install`, para o projeto baixar todas as bibliotecas necessárias.
* Renomear o arquivo `.env.exemple` para `.env` pois nele há o endereço da url da api que é necessário para o funcionamento da aplicação:
```
 REACT_APP_API_URL=http://localhost:8080/api/v1
``` 

* Por fim, dando tudo certo até o seguinte momento, temos 1 comando para rodar:
    * `yarn start`: este comando irá levantar a aplicação no seguinte endereço: [http://localhost:3000](http://localhost:3000)

### Configuração (Com Docker)

* O projeto necessita apenas do `node.js` para ser executado,
caso não tenha em sua máquina, acesse os links abaixo:
    * node.js: [Baixar node.js](https://nodejs.org/pt-br/download/)
    
* Logo após a etapa de instalação, basta entrar na pasta do projeto e rodar o comando
`yarn install`, para o projeto baixar todas as bibliotecas necessárias.
* Renomear o arquivo `.env.exemple` para `.env` pois nele há o endereço da url da api que é necessário para o funcionamento da aplicação:
```
 REACT_APP_API_URL=http://localhost:8080/api/v1
``` 

* Depois de confihurar a URL da api, vamos gerar a imagem da aplicação com o docker, com o seguinte comando:
```
  docker build -t task-app .
```
* Este processo demora um pouco.

* Depois de gerar a imagem da aplicação, rode o seguinte comando para levantar o container da aplicação:
```
docker run \                
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    task-app

```

* Por fim, dando tudo certo até o seguinte momento, podemos acessar o endereço: [http://localhost:3001](http://localhost:3001)