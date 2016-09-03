var express = require('express');
var path = require('path');

var app = express();

// Serve static assets from the /public folder
app.use('/', express.static(path.join(__dirname, '/dist')));

// Use CORS
app.use(require('./cors'));

var port = process.env.PORT || 4200;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function () {
    console.log('angular-seggu running on port ' + port + '.');
});
