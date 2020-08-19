import express, { Request, Response } from 'express'
import { next, handle } from './modules/next'
import { port } from './modules/config'

next.prepare().then(() => {
  const app = express()

  app.get('*', (req: Request, res: Response) => handle(req, res))
  app.listen(port)
})
