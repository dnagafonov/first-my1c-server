const app = require('express')();
const appHostName = '127.0.0.1';
const appPort = 8000;
const usersRouter = require('./api/users/userRouter');
const apiRouter = require('./api/apiRouter');
const cors = require('cors');

const { createSqlConnection } = require('./models/index');

const sqlConnection = createSqlConnection();
sqlConnection.sync( {force: true} )
.catch(e => console.log(`Sync error: ${e.message}`));

app.use(cors());
apiRouter.use('/users', usersRouter);
app.use(`/api`, apiRouter);

app.listen(appPort, appHostName, () => {
    console.log(`\nServer started ${appHostName}:${appPort} at ${new Date()}\n`)
});