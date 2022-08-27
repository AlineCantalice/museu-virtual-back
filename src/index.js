import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import qrcodeRouter from './routers/qrcodeRouter.js'

dotenv.config()

const app = express()

app.use(cors(), express.json())

app.use(qrcodeRouter)

app.listen(process.env.PORT, () => {
    console.log('Server listening on PORT ' + process.env.PORT)
})