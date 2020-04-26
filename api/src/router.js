const express = require('express');
const users = require('./users');
const router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/', (req, resp) => {
  resp.send('Trello Clone server is running.');
});

router.post('/newuser', (req, resp) => {
  const response = users.addUser(req.body);
  resp.send(response);
});

module.exports = router;