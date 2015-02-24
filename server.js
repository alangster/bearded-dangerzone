var http = require("http"); 
// requires the http module that ships with NodeJS
// makes the module accessible through the variable http

// call createServer() on http module
// returns an object, which has a method listen()
http.createServer(function(request, response) {
	// we passed createServer() an anonymous function
	// could have declared a named function outside and then just passed it in
	console.log("request received.")
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888);
console.log("server started");
// the listen() method takes a numeric value that indicates the port number
// on which the server is to listen

// could have done the following
// var http = require("http");
// var server = http.createServer();
// server.listen(8888)

// When the callback function fires, it gets two params--request and response
// request and response are objects--can use their methods to handle details of
// the HTTP request that occurred and to respond to the request
// When request is received, use response.writeHead() and response.write()
// call response.end() to actually finish the response

