import vine from '@vinejs/vine'

export const createUsuarioValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(3),
    idade: vine.number(),
  })
)

/**
 * Validates the post's update action
 */
export const updateUsuarioValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(3),
    idade: vine.number(),
  })
)
