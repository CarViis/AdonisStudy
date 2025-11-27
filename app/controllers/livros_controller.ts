import { createLivroValidator } from '#validators/livro'
import type { HttpContext } from '@adonisjs/core/http'

export default class LivrosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return [
      { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
      { id: 2, titulo: '1984', autor: 'George Orwell' },
      { id: 3, titulo: 'Dom Casmurro', autor: 'Machado de Assis' },
    ]
  }

  async create({params}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */

  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createLivroValidator)
    return payload
  }

  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  //async update({ params, request }: HttpContext) {}
  async destroy({ params }: HttpContext) {}
}
