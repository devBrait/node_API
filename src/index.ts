import express from 'express'
import mainRouter from './route'
import { swaggerSpec, swaggerUi } from './swagger';

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use("/v1", mainRouter)

app.listen(port, () => {
    console.log(`Server funcionando na porta: ${port}`)
})