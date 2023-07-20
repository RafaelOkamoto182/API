const sqliteConnection = require('../../sqlite')
const createUsers = require('./createUsers')

async function runMigrations() {
    const schemas = [
        createUsers
    ].join('')  //(nao é o join do sql, deixar o mouse na funcao se tiver duvida)


    sqliteConnection()
        .then(database => database.exec(schemas))
        .catch(error => console.error(error))
}

module.exports = runMigrations


/* 
sqliteConnection() é uma função que retorna uma promessa, o db significa database e representa o banco de dados, 
servindo para executar consultas no banco de dados. então o db => db.exec(schemas) serve para executar os schemas definidos com os comandos SQL no banco
e o .then() serve para executar essa promessa assim que ela estiver pronta. Resumidamente, o objeto db é usado para interagir com o banco de dados SQLite, 
executando consultas SQL e recuperando dados que são passados como parâmetro para a função dentro do .then().
*/