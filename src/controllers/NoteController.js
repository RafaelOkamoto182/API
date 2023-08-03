const knex = require("../database/knex")

class NoteController {

    async create(req, res) {
        const { title, description, tags, links } = req.body
        const { user_id } = req.params

        const [note_id] = await knex('notes').insert({
            title,
            description,
            user_id
        })

        const linksToInsert = links.map((link) => {
            return {
                note_id,
                url: link
            }
        })

        await knex('links').insert(linksToInsert)

        const tagsToInsert = tags.map((tagName) => {
            return {
                user_id,
                note_id,
                name: tagName
            }
        })

        await knex('tags').insert(tagsToInsert)

        return res.json()
    }
}

module.exports = NoteController