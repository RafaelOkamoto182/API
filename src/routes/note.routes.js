const { Router } = require("express")

const noteRouter = Router()

const NoteController = require("../controllers/noteController")
const noteController = new NoteController()


noteRouter.post("/:user_id", noteController.create)
noteRouter.get("/:id", noteController.getById)
noteRouter.delete("/:id", noteController.delete)
noteRouter.get("/", noteController.get)

module.exports = noteRouter