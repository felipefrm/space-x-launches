import express from 'express'
import cors from 'cors'
import { router } from './routes'

const port = process.env.PORT || 3333

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => console.log('Server is running on port 3333!'))