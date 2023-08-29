const { Router } = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const certifyAuthenticated = require("../middlewares/certifyAuthenticated")
const UserController = require("../controllers/UserController")

const userRouter = Router()

const userController = new UserController()

const upload = multer(uploadConfig.MULTER)


userRouter.post("/", userController.create)
userRouter.put("/", certifyAuthenticated, userController.update)
userRouter.patch("/avatar", certifyAuthenticated, upload.single("avatar"), (req, res) => {
    console.log(req.file.filename)
    res.json()
})

module.exports = userRouter