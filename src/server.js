require("express-async-errors")

const AppError = require("./utils/AppError")

const express = require("express")

const runMigrations = require('./database/sqlite/migrations')

//Quando nao especifica nenhum arquivo dentro da pasta, ele ja procura algum com nome de "index"
const routesRouter = require("./routes")

const app = express()
//Define em qual formato as requisições vao vir. Sem isso dá erro na hora de fazer os post etc, só funcionaria os GET
app.use(express.json())

runMigrations()

app.use(routesRouter)

/* 
    error: captura o erro da requisicao,
    req: objeto da requicicao,
    res: objeto da resposta,
    next: caso queira que faça alguma coisa depois disso tudo.
    Mesmo nao usando alguns desses parametros, precisa colocar por conta da ordem que o método lê tudo

    instanceOf: chega se o error capturado é uma instancia da classe AppError criada na pasta utils. Esse erro é lançado lá no UserController.
        Em outras palavras, naquele if está checando se o erro é um erro da parte do cliente, uma requisicao errada que o cliente tenha feito.
        Depois disso vem uma resposta padrao, que seria um erro de servidor.
    
    Essa é uma funcao de custom error handling. É um middleware, equivalente a fazer: function ErrorHandling(err,req,res,next){} e depois usar app.use(ErrorHandling)
*/
app.use((error, req, res, next) => {
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error)

    return res.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

const PORT = 3333
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })