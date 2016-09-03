var express = require('express');

var app = express();

// Serve static assets from the /public folder
app.use('/', express.static(path.join(__dirname, '/public')));

// Use CORS
app.use(require('./cors'));

var port = process.env.PORT || 4200;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function () {
    console.log('angular-seggu running on port ' + port + '.');
});
