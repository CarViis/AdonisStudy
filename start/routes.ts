/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const LivrosController = () => import('#controllers/livros_controller')
const UsuariosController = () => import('#controllers/usuarios_controller')
import router from '@adonisjs/core/services/router'

router.resource('livros', LivrosController).apiOnly()
router.resource('usuarios', UsuariosController).apiOnly()
