var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./server/routes');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Used for production build
app.use(express.static(path.join(__dirname, 'dist')));

routes(app);

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});
