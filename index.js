const { port } = require("./config"); 
const server = require("./server.js");

server.listen(port, () => {
    console.log(`=== Server Listening on port ${port} ===`);
});