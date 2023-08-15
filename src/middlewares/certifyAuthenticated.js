const { verify } = require('jsonwebtoken')
const AppError = require('../utils/AppError')
const authConfig = require('../configs/auth')

function certifyAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        throw new AppError("JWT token not available")
    }

    //o split vai separar o "Bearer  123djwe83jdnyu". O [, token] pega só a segunda parte do array e coloca na variavel token.
    const [, token] = authHeader.split(" ")

    try {

        //desestruturando e criando alias: o id vem como "sub" la do verify. O sub:user_id faz o user_id ser o alias do sub
        const { sub: user_id } = verify(token, authConfig.jwt.secret)

        //criando o objeto user dentro da req
        req.user = {
            id: Number(user_id)
        }

        return next()

    } catch {
        throw new AppError("JWT invalid token", 401)
    }

}

module.exports = certifyAuthenticated