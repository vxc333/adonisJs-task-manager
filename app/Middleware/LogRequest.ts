import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LogRequest {
  public async handle({ request, auth }: HttpContextContract, next: () => Promise<void>) {
    const user = auth.user?.name
    const date = new Date().toISOString()
    const method = request.method()
    const url = request.url()
    await next()
    console.log(`[${date}] User: ${user}, Method: ${method}, URL: ${url}`)
  }
}
