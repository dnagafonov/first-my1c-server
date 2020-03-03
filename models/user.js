const sequelize = require('sequelize');

const UsersTable = (sqlconnection) => {
    return sqlconnection.define('user', {
        login: {
            primaryKey: true,
            type: sequelize.STRING,
            allowNull: false
        },
        password: {
            type: sequelize.STRING,
            allowNull: false
        }
    })
};

module.exports = {
    UsersTable,
};