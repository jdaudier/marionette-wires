var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var api = module.exports = express();
api.set('port', process.env.PORT || 3000);

api.set('views', 'views');
api.set('view engine', 'jade');
api.use(express.static('public'));

api.use(logger('dev'));
api.use(bodyParser.json());

api.get('/', function(req, res){
  res.render('layout');
});

require('./books/routes')(api);
require('./colors/routes')(api);

api.listen(api.get('port'));
console.log('Marionette Wires is listening on port ' + api.get('port'));
