import "express-async-errors"

import AppError from "./utils/AppError"

import express, { json } from 'express'

import runMigrations from './database/sqlite/migrations'

//Quando nao especifica nenhum arquivo dentro da pasta, ele ja procura algum com nome de "index"
import routesRouter from "./routes"

const app = express()
//Define em qual formato as requisições vao vir. Sem isso dá erro na hora de fazer os post etc, só funcionaria os GET
app.use(json())

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
