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

Route.group(() => {
  Route.get('/', ({ request, auth, response }) => {
    response.redirect('https://github.com/elyaserfani')
  })
})

Route.group(() => {
  Route.group(() => {
    Route.post('register', 'AuthController.register')
    Route.post('login', 'AuthController.login')
  })

  Route.group(() => {
    Route.post('services/create', 'ServicesController.create')
    Route.get('services/all', 'ServicesController.getAll')
    Route.get('services/:id', 'ServicesController.selectById')
    Route.post('services/search', 'ServicesController.search')
    Route.put('services/update/:id', 'ServicesController.update')
    Route.delete('services/:id', 'ServicesController.delete')
  }).middleware('auth:api')
}).prefix('api/v1')
