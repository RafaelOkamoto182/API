const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const DiskStorage = require('../providers/DiskStorage')

class UserAvatarController {
    async update(req, res) {
        const user_id = req.user.id;
        const avatarFileName = req.file.filename;

        const user = await knex('users').where({ id: user_id })

        if (!user) {
            throw new AppError("Only logged users can change their avatar", 401)
        }

        const diskStorage = new DiskStorage

        if (user.avatar) {
            await diskStorage.deleteFile(user.avatar)
        }

        const filename = await diskStorage.saveFile(avatarFileName)
        user.avatar = filename

        await knex('users').where({ id: user_id }).update(user)

        return res.json(user)
    }

}

module.exports = UserAvatarController