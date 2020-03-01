const Sequelize = require('sequelize');
const UserModel = require('./models/user');
const { DIALECT, HOST, DB_NAME, DB_LOGIN, DB_PASSWORD } = require('./models/constants');

const server = require('express')();
const serverHostName = '127.0.0.1';
const serverPort = 8000;
const usersRouter = require('./api/users/get');

server.use(`/users`, usersRouter);

const sqlConnection = new Sequelize(DB_NAME, DB_LOGIN, DB_PASSWORD, {
    dialect: DIALECT,
    host: HOST,
});

sqlConnection.sync().catch(e => console.error(e.message));

server.listen(serverPort, serverHostName, () => {
    console.log(`\nServer started ${serverHostName}:${serverPort} at ${new Date()}\n`)
})