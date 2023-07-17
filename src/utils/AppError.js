class AppError {
    message;
    statusCode;

    constructor(message, statusCode = 400) {
        this.message = message
        this.statusCode = statusCode
        //se nao vier nada no status code, o proprio construtor atribui o valor de 400
    }
}

module.exports = AppError