//Setting Framework
var express = require('express');
var app = express();
var http = require('http');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/'));


app.get('/', function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
});
//Launch the Server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

