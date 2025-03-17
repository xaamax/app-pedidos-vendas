# Gerenciamento de Pedidos e Vendas
Aplicação desenvolvida para o gerenciamento de pedidos de vendas, dividida em duas partes principais:
- **Backend**: Um servidor Node.js construído com Node (usando Nest.js), MongoDB (usando Mongoose), e outras dependências.
- **Frontend**: Aplicação frontend utilizando Angular.

## Pré-Requisitos
- **Node.js**: Versão 22 ou superior. [Download](https://nodejs.org/).
- **MongoDB**: Banco de dados utilizado no projeto. [Download](https://www.mongodb.com/).
- **Docker** (opcional): Para rodar o projeto em um contêiner. [Download](https://www.docker.com/).

## Instalação
Clone o repositório:
```bash
https://github.com/xaamax/app-pedidos-vendas.git
```
### Backend
Navegue até o diretório do backend
```bash
cd app-pedidos-vendas/backend
```
Na raiz do projeto renomeie o arquivo `.env.exemple` para `.env`  

### Execução
- **Com Docker**
Verifique se o [Docker](https://www.docker.com/) está instalado e sendo executado na sua máquina
```bash
docker ps
```
Na raiz do projeto execute
```bash
docker-compose up -d
```

- **Sem Docker**
#### Backend
Navegue até o diretório do backend
```bash
cd app-pedidos-vendas/backend
```
Instale as dependências
```bash
npm install
```
Inicie o servidor em modo de desenvolvimento
```bash
npm run start
```
#### Frontend
Navegue até o diretório do frontend
```bash
cd app-pedidos-vendas/frontend
```
Instale as dependências
```bash
npm install
```
Inicie o servidor em modo de desenvolvimento
```bash
npm run start
```
## Autenticação
username: maxp
password: maxppass