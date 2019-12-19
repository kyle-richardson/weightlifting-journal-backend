const express = require('express');

const server = express();

const apiRouter = require('./Routes/api/api-router');
const middleware = require('./Routes/api/middleware');

middleware(server);

server.use('/api', apiRouter);

module.exports = server;
