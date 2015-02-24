var server = require("./server");
var router = require("./router");

server.start(router.route);
// can now start server with 'node index.js'

