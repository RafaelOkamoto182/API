const express = require('express')

const app = express()

app.get("/messages/:id/:user", (req, res) => {
    const { id, user } = req.params

    res.send(`
        Mensagem ${id} para o usuario ${user}
    `)

})

const PORT = 3333
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })
