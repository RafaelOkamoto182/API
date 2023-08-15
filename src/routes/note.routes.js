const { Router } = require("express")

const noteRouter = Router()

const NoteController = require("../controllers/NoteController")
const certifyAuthenticated = require("../middlewares/certifyAuthenticated")

const noteController = new NoteController()

//como todas as rotas usam o middleware, é so fazer esse .use que ele é chamado sempre que uma rota é chamada
noteRouter.use(certifyAuthenticated)

noteRouter.post("/", noteController.create)
noteRouter.get("/:id", noteController.getById)
noteRouter.delete("/:id", noteController.delete)
noteRouter.get("/", noteController.get)

module.exports = noteRouter