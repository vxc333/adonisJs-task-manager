/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Rotas de autenticação

Route.post('/register', 'UsersController.store') //Registrar um novo usuário.
Route.post('/login', 'AuthController.store') //Autenticar um usuário.
Route.delete('/login', 'AuthController.destroy').middleware('auth') //Desautenticar um usuário

// Rotas de tarefas

Route.group(() => {
  Route.resource('/tasks', 'TasksController').apiOnly()
})
  .middleware('auth')
  .middleware('logRequest')

Route.group(() => {
  Route.resource('users', 'UsersController').apiOnly().except(['store'])
}).middleware('auth')
