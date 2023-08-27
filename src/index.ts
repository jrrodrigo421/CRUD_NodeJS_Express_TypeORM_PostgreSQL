import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes/routes";

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())
  app.use(routes)


  //testando endpoint para inicialização primaria
  // app.get('/', (req, res) => {
  //   return res.json('HELLLOOOO TYPE')
  // })
  console.log('\n\nConectado na porta: \n', process.env.PORT);

  return app.listen(process.env.PORT)
})
