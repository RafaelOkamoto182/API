const { Router } = require("express")
const userRouter = require("./user.routes.js")
const noteRouter = require("./note.routes.js")
const messageRouter = require("./message.routes.js")

const routesRouter = Router()

routesRouter.use("/user", userRouter)
routesRouter.use("/note", noteRouter)
routesRouter.use("/message", messageRouter)


module.exports = routesRouter