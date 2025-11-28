import { createLivroValidator } from '#validators/livro'
import type { HttpContext } from '@adonisjs/core/http'
import Livro from '#models/livro';

export default class LivrosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const livros = await Livro.all();
    return livros;
  }

  async create({params}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */

  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createLivroValidator)
    const livro = await Livro.create(payload)
    return livro;
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
