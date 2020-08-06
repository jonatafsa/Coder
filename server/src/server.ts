import express from 'express'
import routes from './routes'
import cors from 'cors'


const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

//Porta listada para Back-End
app.listen(3333)
