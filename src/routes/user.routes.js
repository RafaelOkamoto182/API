const { Router, json } = require("express")

const userRouter = Router()

const UserController = require("../controllers/UserController")
const userController = new UserController()

function testMiddleware(req, res, next) {

    /*  if (!req.body.isAdmin) {
         return res.json({ message: "user unauthorized" })
     } */

    next()
}



//query params: os valores NAO SAO OBRIGATORIOS. Se nao passar nada os valores vao como undefined
userRouter.get("/", userController.getUsers)

userRouter.post("/", testMiddleware, userController.create)

module.exports = userRouter