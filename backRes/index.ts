import express from 'express'
import './config/dotenv.ts'
import cors from 'cors'
const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.get('/',(req, res)=>{
    res.status(200).send({"message":"Hello world"})
})
app.listen(port,()=>{
    console.log('server is running on http://localhost:'+port)
})