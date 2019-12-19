const express = require('express');

const server = express();

const apiRouter = require('./Routes/api/api-router');

server.use(express.json());

server.use('/api', apiRouter);

