const http = require('http');

const express = require('express');
const hmr = require('./hmr');
const app = express();

app.use(require('morgan')('short'));
hmr(app);


// Do anything you like with the rest of your express application.

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get("/multientry", function(req, res) {
  res.sendFile(__dirname + '/index-multientry.html');
});

if (require.main === module) {
  const server = http.createServer(app);
  server.listen(process.env.PORT || 1616, function() {
    console.log("Listening on %j", server.address());
  });
}
