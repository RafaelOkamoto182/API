const { Router } = require("express")

const userRouter = Router()

const UserController = require("../controllers/UserController")
const certifyAuthenticated = require("../middlewares/certifyAuthenticated")
const userController = new UserController()

//query params: os valores NAO SAO OBRIGATORIOS. Se nao passar nada os valores vao como undefined
userRouter.get("/", userController.getUsers)

userRouter.post("/", userController.create)
userRouter.put("/", certifyAuthenticated, userController.update)

module.exports = userRouter