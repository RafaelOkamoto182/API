const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

const TMP_FOLDER = path.resolve(__dirname, '..', '..', 'tmp')
const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, 'uploads')

const MULTER = {
    storage: multer.diskStorage({
        destination: TMP_FOLDER,
        filename(req, file, callback) {
            const fileHash = crypto.randomBytes(10).toString('hex')
            const filename = `${fileHash}-${file.originalname}`

            return callback(null, filename)

        }
    })
}

//caso no futuro utilize outra configuraçao ou outra biblioteca para outro serviço, é so colocar aqui em baixo:
//const OUTRA_CONFIG = {}

module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER
}