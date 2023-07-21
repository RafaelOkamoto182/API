const AppError = require('../utils/AppError')
const { hash } = require('bcryptjs')
const sqliteConnection = require("../database/sqlite")

class UserController {
    /* 
        - Index -> GET para listar vários registros
        - Show -> GET para listar um registro específico
        - Create -> POST para criar um registro
        - Update -> PUT para atualizar um registro
        - Delete -> DELETE para excluir um registro

        Nessa arquitetura, caso a classe precise de mais de 5 métodos, provavelmente faz sentido criar um novo controller pra ela.
    */

    async create(req, res) {
        const { name, email, password } = req.body

        const db = await sqliteConnection()
        const emailAlreadyUsed = await db.get("SELECT * FROM users WHERE email = (?)", [email])

        if (emailAlreadyUsed) {
            throw new AppError("Email já utilizado")
        }

        const hashedPassword = await hash(password, 8)

        await db.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword])

        return res.status(201).json()
    }

    getUsers(req, res) {
        const { page, limit } = req.query

        res.status(200).send(`Pagina: ${page}. Limite de usuarios: ${limit}`)
    }
}

module.exports = UserController