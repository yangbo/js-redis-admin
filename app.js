var express = require('express');
var jade = require('jade');

var app = express();

app.use(express.static('public'));

app.set('view engine', 'jade');		// default ext engine
app.engine('jade', jade.__express);

app.get('/', function(req, resp){
	resp.render('index');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
