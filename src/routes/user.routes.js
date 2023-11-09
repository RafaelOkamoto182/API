const { Router } = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const certifyAuthenticated = require("../middlewares/certifyAuthenticated")

const UserController = require("../controllers/UserController")
const UserAvatarController = require("../controllers/UserAvatarController")

const userController = new UserController()
const userAvatarController = new UserAvatarController()

const upload = multer(uploadConfig.MULTER)

const userRouter = Router()

userRouter.post("/", userController.create)
userRouter.put("/", certifyAuthenticated, userController.update)
userRouter.patch("/avatar", certifyAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = userRouter