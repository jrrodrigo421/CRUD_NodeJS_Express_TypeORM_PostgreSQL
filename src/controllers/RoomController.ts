import { Request, Response } from "express";
import { resolve } from "path";
import { roomRepository } from "../repositories/roomRepositorie";

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



}