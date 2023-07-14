class UserController {
    /* 
        - Index -> GET para listar vários registros
        - Show -> GET para listar um registro específico
        - Create -> POST para criar um registro
        - Update -> PUT para atualizar um registro
        - Delete -> DELETE para excluir um registro

        Nessa arquitetura, caso a classe precise de mais de 5 métodos, provavelmente faz sentido criar um novo controller pra ela.
    */

    create(req, res) {
        const { name, email, password } = req.body

        res.json({ name, email, password })
    }
}

module.exports = UserController