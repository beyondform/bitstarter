var express = require('express');


var app = express.createServer(express.logger());

var content = fs.readFileSync('./bitstarter/index.html', 'utf8');

app.get('/', function(request, response) {


  response.end( content ); 
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
