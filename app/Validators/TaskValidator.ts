import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TaskValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }, [rules.unique({ table: 'tasks', column: 'title' })]),
    description: schema.string({ trim: true }),
    status: schema.enum.optional(['pendente', 'em_andamento', 'concluida'] as const),
  })

  public messages: CustomMessages = {
    unique: 'O campo {{field}} precisa ser único',
    string: 'O campo {{field}} precisa ser tipo texto',
    required: 'O campo {{field}} é obrigatório',
    enum: 'O campo {{field}} precisa ser um valor válido',
  }
}
