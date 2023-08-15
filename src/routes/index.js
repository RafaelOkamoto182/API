const { Router } = require("express")
const userRouter = require("./user.routes.js")
const noteRouter = require("./note.routes.js")
const tagRouter = require("./tag.routes.js")
const sessionRouter = require('./session.routes.js')

const routesRouter = Router()

routesRouter.use("/user", userRouter)
routesRouter.use("/session", sessionRouter)
routesRouter.use("/note", noteRouter)
routesRouter.use("/tag", tagRouter)



module.exports = routesRouter