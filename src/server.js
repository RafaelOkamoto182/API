const express = require('express')

const app = express()

//route params: os valores SAO OBRIGATORIOS
app.get("/messages/:id/:user", (req, res) => {
    const { id, user } = req.params

    res.send(`
        Mensagem ${id} para o usuario ${user}
    `)

})

//query params: os valores NAO SAO OBRIGATORIOS. Se nao passar nada os valores vao como undefined
app.get("/users", (req, res) => {
    const { page, limit } = req.query

    res.send(`Pagina: ${page}. Limite de usuarios: ${limit}`)
})

const PORT = 3333
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })
