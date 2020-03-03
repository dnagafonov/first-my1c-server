    const Sequelize = require('sequelize');
const { DIALECT, HOST, DB_NAME, DB_LOGIN, DB_PASSWORD } = require('./constants');

const createSqlConnection = () => {
    const sqlConnection = new Sequelize(DB_NAME, DB_LOGIN, DB_PASSWORD, {
        dialect: DIALECT,
        host: HOST,
    });
    return sqlConnection;
};

module.exports = {
    createSqlConnection,
}