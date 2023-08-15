const { Router } = require("express")

const TagController = require("../controllers/TagController")
const certifyAuthenticated = require("../middlewares/certifyAuthenticated")

const tagRouter = Router()

const tagController = new TagController()


tagRouter.get("/", certifyAuthenticated, tagController.get)

module.exports = tagRouter