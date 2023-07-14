const { Router } = require("express")

const userRouter = Router()

//query params: os valores NAO SAO OBRIGATORIOS. Se nao passar nada os valores vao como undefined
userRouter.get("/", (req, res) => {
    const { page, limit } = req.query

    res.send(`Pagina: ${page}. Limite de usuarios: ${limit}`)
})

userRouter.post("/", (req, res) => {
    const { name, email, password } = req.body

    res.json({ name, email, password })
})

module.exports = userRouter