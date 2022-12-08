import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Service from 'App/Models/Service'
import { json } from 'stream/consumers'
import { writeJson } from 'fs-extra'

export default class ServicesController {
  public async create({ response, auth, request }: HttpContextContract) {
    const user = await auth.authenticate()
    const service = await Service.create({
      service_name: request.input('service_name'),
      user_id: user.id,
    })

    if (service) {
      return response.status(200).json({ message: 'created' })
    } else {
      return response.status(400).json({ message: 'not created' })
    }
  }

  public async getAll({ response, request }: HttpContextContract) {
    try {
      const services = await Service.all()
      if (services) {
        return response.status(200).send(services)
      } else {
        return response.status(404).json({ message: 'not found' })
      }
    } catch (error) {
      console.log(error)
    }
  }

  public async selectById({ response, request }: HttpContextContract) {
    try {
      const { id } = request.params()
      const service = await Service.find(id)
      if (service) {
        return response.status(200).send(service)
      } else {
        return response.status(404).json({ message: 'not found' })
      }
    } catch (error) {
      console.log(error)
    }
  }

  public async search({ response, request }: HttpContextContract) {
    try {
      const service_name = request.input('service_name')
      const services = await Service.query()
        .select('*')
        .from('services')
        .where('service_name', 'LIKE', '%' + service_name + '%')
      if (services.length != 0) {
        return response.status(200).send(services)
      } else {
        return response.status(404).json({ message: 'not found' })
      }
    } catch (error) {
      console.log(error)
    }
  }

  public async update({ auth, request, response }: HttpContextContract) {
    const { id } = request.params()
    const user = await auth.authenticate()

    if (!Number(id)) return response.status(400).send({ message: 'Wrong id format' })

    const data = request.body()
    data.user_id = user.id

    try {
      const service = await Service.findOrFail(id)
      await service.merge(data).save()
      return response.status(200).send({ message: 'Service data updated successfully' })
    } catch (error) {
      return response.status(400).json({ message: 'Service already exists' })
    }
  }

  public async delete({ response, request }: HttpContextContract) {
    const { id } = request.params()

    if (!Number(id)) return response.status(400).send({ message: 'Wrong id format' })

    try {
      const service = await Service.findOrFail(Number(id))
      await service.delete()
      return response.status(200).json({ message: 'Service deleted successfully' })
    } catch (error) {
      return response.status(400).json({ message: 'Service does not exists' })
    }
  }
}
