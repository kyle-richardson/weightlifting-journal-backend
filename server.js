const express = require("express");
const cors = require("cors");
const server = express();

const apiRouter = require("./Routes/api/api-router");
const middleware = require("./Routes/api/middleware");

middleware(server);

// server.use(cors());
server.use("/api", apiRouter);
server.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE,GET,PATCH,POST,PUT',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    });
    next();
});

module.exports = server;
