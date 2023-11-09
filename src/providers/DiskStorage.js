const fs = require('fs')
const path = require('path')
const uploadConfig = require('../configs/upload')

class DiskStorage {

    async saveFile(file) {

        //Troca o arquivo pra pasta definitiva
        await fs.promises.rename(
            path.resolve(uploadConfig.TMP_FOLDER, file),
            path.resolve(uploadConfig.UPLOADS_FOLDER, file)
        )

        return file

    }

    async deleteFile(file) {
        const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)

        try {
            //cuida se o arquivo está aberto por outro programa, está corrompido, se está disponível etc.
            //Se o arquivo nao estiver disponível pra mudar de lugar, vai ali pro catch (dar uma olhada melhor nisso)
            await fs.promises.stat(filePath)
        } catch {
            return
        }

        await fs.promises.unlink(filePath)
    }
}

module.exports = DiskStorage