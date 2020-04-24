const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
  resp.send('Trello Clone server is running.');
});

module.exports = router;