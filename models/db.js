const Sequelize = require('sequelize')
// Conexao com o banco de dados MySQL
const sequelize = new Sequelize('postapp', 'root', 'mysql', {
    host: "localhost",
    dialect: "mysql",
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}