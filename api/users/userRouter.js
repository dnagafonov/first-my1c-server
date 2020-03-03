const usersRouter = require('express').Router();
const bodyParser = require('body-parser');
const { createSqlConnection } = require('../../models/index');
const { UsersTable } = require('../../models/user');

usersRouter.use(bodyParser.json());

usersRouter.post('/login', function (req, resp) {
    const login = req.body.login;
    const password = req.body.password;
    const sqlConnection = createSqlConnection();
    const users = UsersTable(sqlConnection);
    let status = 'success';
    
    users.findAll({ where : {
      login,
      password
    }})
  .then(res => {
      if(res[0] === undefined)
        status = 'deied';
      sqlConnection.close();
      resp.send(status);
    });
});

module.exports = usersRouter;