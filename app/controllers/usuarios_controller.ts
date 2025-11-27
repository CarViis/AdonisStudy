import { createUsuarioValidator } from '#validators/usuario'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsuariosController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return [
      { id: 1, nome: 'João Silva', idade: 30 },
      { id: 2, nome: 'Maria Oliveira', idade: 25 },
      { id: 3, nome: 'Carlos Souza', idade: 28 },
    ]
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(createUsuarioValidator)
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
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
