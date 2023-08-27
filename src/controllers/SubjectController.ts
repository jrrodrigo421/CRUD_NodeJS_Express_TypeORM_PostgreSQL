import { Request, Response } from "express";

export class SubjectController {
  async create(req: Request, res: Response) {
    return res.json("Primeiro controller criado e testado no postaman!!")
  }
}