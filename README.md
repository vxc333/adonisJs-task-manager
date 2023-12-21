# AdonisJs Task Manager

## Descrição

O Adonis Task Manager é uma aplicação de gerenciamento de tarefas construída com AdonisJS. Permite aos usuários criar, visualizar, atualizar e excluir tarefas, proporcionando uma solução simples e eficaz para organização pessoal ou colaborativa.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado o seguinte:

- [Node.js v14](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- Banco de dados (por exemplo, MySQL, PostgreSQL)

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/vxc333/Adonis-task-manager.git
cd Adonis-task-manager
npm install
````
## Configuração

Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente, incluindo as informações do banco de dados.

Exemplo de `.env`:

```dotenv
DB_CONNECTION=pg
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu-usuario
DB_PASSWORD=sua-senha
DB_DATABASE=adonis_task_manager
```
## Uso

1. Execute as migrações para criar as tabelas no banco de dados:

    ```bash
    adonis migration:run
    ```

2. Inicie o servidor:

    ```bash
    node ace serve --watch
    ```

3. Acesse a aplicação em [http://localhost:3333](http://localhost:3333).

## Rotas

### Rotas de Autenticação

#### Registrar um novo usuário
- Método: POST
- URL: /register
- Controlador: UserController
- Método do Controlador: store
- Descrição: Rota para registrar um novo usuário.

#### Autenticar um usuário
- Método: POST
- URL: /login
- Controlador: AuthController
- Método do Controlador: store
- Descrição: Rota para autenticar um usuário.

#### Desautenticar um usuário
- Método: DELETE
- URL: /login
- Controlador: AuthController
- Método do Controlador: destroy
- Middleware: auth
- Descrição: Rota para desautenticar um usuário.

### Rotas de Tarefas

#### CRUD de Tarefas
- Grupo de Rotas: /tasks
- Middleware: auth, logRequest

#### Listar Tarefas
- Método: GET
- URL: /tasks
- Controlador: TasksController
- Método do Controlador: index
- Descrição: Lista todas as tarefas.

#### Criar Tarefa
- Método: POST
- URL: /tasks
- Controlador: TasksController
- Método do Controlador: store
- Descrição: Cria uma nova tarefa.

#### Exibir Detalhes da Tarefa
- Método: GET
- URL: /tasks/:id
- Controlador: TasksController
- Método do Controlador: show
- Descrição: Exibe detalhes de uma tarefa específica.

#### Atualizar Tarefa
- Método: PUT
- URL: /tasks/:id
- Controlador: TasksController
- Método do Controlador: update
- Descrição: Atualiza uma tarefa existente.

#### Excluir Tarefa
- Método: DELETE
- URL: /tasks/:id
- Controlador: TasksController
- Método do Controlador: destroy
- Descrição: Exclui uma tarefa existente.

### Rotas de Usuários

#### CRUD de Usuários
- Grupo de Rotas: /users
- Middleware: auth

#### Listar Usuários
- Método: GET
- URL: /users
- Controlador: UsersController
- Método do Controlador: index
- Descrição: Lista todos os usuários.

#### Exibir Detalhes do Usuário
- Método: GET
- URL: /users/:id
- Controlador: UsersController
- Método do Controlador: show
- Descrição: Exibe detalhes de um usuário específico.

#### Atualizar Usuário
- Método: PUT
- URL: /users/:id
- Controlador: UsersController
- Método do Controlador: update
- Descrição: Atualiza informações de um usuário existente.

#### Excluir Usuário
- Método: DELETE
- URL: /users/:id
- Controlador: UsersController
- Método do Controlador: destroy
- Descrição: Exclui um usuário existente.

