class SessionController {
    async create(req, res) {
        const { name, email } = req.body

        return res.json({ name, email })
    }
}

module.exports = SessionController