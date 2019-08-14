let http = require("http");

let server = http.createServer(function(req, res) {
  console.log("request was made from " + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hey People");
});

server.listen(3000, "127.0.0.1");
console.log("You are now listening to port 3000");
