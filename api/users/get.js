const usersRouter = require('express').Router();
const bodyParser = require('body-parser');

usersRouter.use(bodyParser.json());

usersRouter.post(`/`, (req, res) => {
    console.log(req.body);
    res.status(101).send(req.body);
});

module.exports = usersRouter;