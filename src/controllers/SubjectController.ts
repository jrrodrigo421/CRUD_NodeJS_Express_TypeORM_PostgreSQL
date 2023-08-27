import { Request, Response } from "express";

export class SubjectController {
  async create(req: Request, res: Response) {
    // return res.json("Primeiro controller criado e testado no postaman!!")
    const { name } = req.body
    console.log('IMPRIMNDO NOME ENVIADO DO FRONTEND', name);


    if (!name) {
      return res.status(400).json({ message: 'O nome é Obrigatório' })
    }
    try {
      return res.json(`Testando pra ver se chega o nome aqui ${name}`)

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Server Error! ' })

    }
  }
}