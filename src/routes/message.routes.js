const { Router } = require("express")

const messageRouter = Router()

//route params: os valores SAO OBRIGATORIOS
messageRouter.get("/:id/:user", (req, res) => {
    const { id, user } = req.params

    res.send(`
        Mensagem ${id} para o usuario ${user}
    `)
})

module.exports = messageRouter
