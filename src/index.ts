import express from 'express'
import mainRouter from './route'

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

app.use('/v1', mainRouter)

app.listen(port, () => {
    console.log(`Server funcionando na porta: ${port}`)
})