const Sequelize = require('sequelize');
const UserModel = require('./user');
const { DIALECT, HOST, DB_NAME, DB_LOGIN, DB_PASSWORD } = require('./constants');

const sqlConnection = new Sequelize(DB_NAME, DB_LOGIN, DB_PASSWORD, {
    dialect: DIALECT,
    host: HOST,
});

const user = UserModel(sqlConnection, Sequelize);

user.findAll({where: { login: 'nikita-lox' }}).then(el => console.log(el));

sqlConnection.sync().catch(e => console.error(e.message));