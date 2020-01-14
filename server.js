const express = require("express");
const cors = require("cors");
const server = express();

const apiRouter = require("./Routes/api/api-router");
const middleware = require("./Routes/api/middleware");

middleware(server);

// server.use(cors());
server.use("/api", apiRouter);

module.exports = server;
