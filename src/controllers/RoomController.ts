import { Request, Response } from "express";
import { resolve } from "path";
import { roomRepository } from "../repositories/roomRepositorie";
import { videoRespository } from "../repositories/videoRepositorie";

export class RoomController {
  async create(req: Request, res: Response) {
    const { name, description } = req.body

    // TODO
    /**
     * Poderiamos fazer regras de validações aqui como feito no SubjectController
     * ou
     * pode ser usado uma lib como yup (Pesquisar)
     */

    try {
      const newRoom = roomRepository.create({ name, description })
      await roomRepository.save(newRoom)
      return res.status(201).json(newRoom)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Error server internal' })

    }
  }
  async createVideo(req: Request, res: Response) {
    const { title, url, } = req.body
    const { idRoom } = req.params

    try {

      const room = await roomRepository.findOneBy({ id: Number(idRoom) })

      if (!room) {
        return res.status(404).json({ message: 'Aula não existe' })
      }

      const newVideo = videoRespository.create({
        title,
        url,
        room

      })

      await videoRespository.save(newVideo)
      return res.status(201).json(newVideo)


    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internaç Server Error!" })
    }
  }



}