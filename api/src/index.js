var express = require('express');
var http = require('http');

const PORT = process.env.PORT || 3001;
const router = require('./router');

const app = express();
const server = http.createServer(app);

app.use(router);
server.listen(PORT, () => console.log(`Trello clone server has started. Listening on port ${PORT}`));