import express from 'express'
import './config/dotenv.ts'
import cors from 'cors'
import { menuRouter } from './routes/menuesRouter.ts'
const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.get('/',(req, res)=>{
    res.status(200).send({"message":"Hello world"})
})
app.use('/api/menues',menuRouter)

app.listen(port,()=>{
    console.log('server is running on http://localhost:'+port)
})