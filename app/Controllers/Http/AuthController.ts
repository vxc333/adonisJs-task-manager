import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async store({ request, auth }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])
    const token = await auth.attempt(email, password, {
      expiresIn: '2 days',
    })
    return token
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
