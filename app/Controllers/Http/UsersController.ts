import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    try {
      const users = await User.all()

      return response.status(200).json({
        data: users,
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Erro ao buscar usuários.',
        error: error.message,
      })
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const body = request.body()

      const user = await User.create(body)

      return response.status(200).json({
        message: 'Usuário criado com sucesso!',
        data: user,
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Erro ao criar o usuário.',
        error: error.message,
      })
    }
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)
      return response.status(200).json({
        data: user,
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Erro ao criar o usuário.',
        error: error.message,
      })
    }
  }

  public async update({ params, request, response, auth }: HttpContextContract) {
    try {
      const user = await auth.authenticate()

      const body = request.body()

      const userUptade = await User.query().where('id', user.id).where(params).firstOrFail()
      // const user = await User.findOrFail(params.id)

      userUptade.name = body.name
      userUptade.email = body.email

      if (body.password) {
        userUptade.password = await Hash.make(body.password)
      }

      await userUptade.save()

      return response.status(200).json({
        message: 'Usuário atualizado com sucesso!',
        data: userUptade,
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Erro ao atualizar o usuário.',
        error: error.message,
      })
    }
  }

  public async destroy({ params, response, auth }: HttpContextContract) {
    try {
      const user = await auth.authenticate()

      const userUptade = await User.query().where('id', user.id).where(params).firstOrFail()

      await userUptade.delete()

      return response.status(200).json({
        message: 'Usuário excluído com sucesso!',
        data: userUptade,
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Erro ao excluir o usuário.',
        error: error.message,
      })
    }
  }
}
