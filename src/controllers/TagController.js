const knex = require('../database/knex')

class TagController {

    async get(req, res) {

        const user_id = req.user.id

        const tags = await knex('tags').where({ user_id })

        return res.json(tags)
    }
}

module.exports = TagController