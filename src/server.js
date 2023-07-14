const express = require('express')

//Quando nao especifica nenhum arquivo dentro da pasta, ele ja procura algum com nome de "index"
const routesRouter = require("./routes")

const app = express()
//Define em qual formato as requisições vao vir. Sem isso dá erro na hora de fazer os post etc, só funcionaria os GET
app.use(express.json())

app.use(routesRouter)

const PORT = 3333
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })
