import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Task from 'App/Models/Task'
import TaskValidator from 'App/Validators/TaskValidator'

export default class TasksController {
  public async index({ response }: HttpContextContract) {
    try {
      const tasks = await Task.all()

      return response.status(200).json({
        message: 'Tarefas recuperadas com sucesso!',
        data: tasks,
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Erro ao buscar tarefas.',
        error: error.message,
      })
    }
  }

  public async store({ auth, response, request }: HttpContextContract) {
    try {
      const user = await auth.authenticate()
      const body = await request.validate(TaskValidator)

      const task = await user.related('task').create(body)

      return response.status(200).json({
        message: 'Tarefa criada com sucesso!',
        data: task,
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Erro ao criar tarefa.',
        error: error.message,
      })
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const task = await Task.findOrFail(params.id)

      return response.status(200).json({
        message: 'Operação realizada com sucesso!',
        data: task,
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Erro ao buscar dados.',
        error: error.message,
      })
    }
  }

  public async update({ response, request, params }: HttpContextContract) {
    try {
      const body = await request.validate(TaskValidator)

      const task = await Task.findOrFail(params.id)

      task.title = body.title
      task.description = body.description

      await task.save()

      return response.status(200).json({
        message: 'Tarefa atualizada com sucesso!',
        data: task,
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Erro ao atualizar dados.',
        error: error.message,
      })
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const task = await Task.findOrFail(params.id)
      await task.delete()
      return response.status(200).json({
        message: 'Tarefa excluída com sucesso!',
        data: task,
      })
    } catch (error) {
      return response.status(400).json({
        message: 'Erro ao excluir dados.',
        error: error.message,
      })
    }
  }
}
