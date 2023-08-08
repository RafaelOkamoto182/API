const { Router } = require("express")

const tagRouter = Router()

const TagController = require("../controllers/TagController")

const tagController = new TagController()


tagRouter.get("/:user_id", tagController.get)

module.exports = tagRouter