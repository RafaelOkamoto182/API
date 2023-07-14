const { Router } = require("express")

const userRouter = Router()

const UserController = require("../controllers/UserController")
const userController = new UserController()


//query params: os valores NAO SAO OBRIGATORIOS. Se nao passar nada os valores vao como undefined
userRouter.get("/", (req, res) => {
    const { page, limit } = req.query

    res.send(`Pagina: ${page}. Limite de usuarios: ${limit}`)
})

userRouter.post("/", userController.create)

module.exports = userRouter