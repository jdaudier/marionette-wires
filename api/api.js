var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var api = module.exports = express();
api.set('port', process.env.PORT || 3000);
api.use(serveStatic('dist'));

api.use(logger('dev'));
api.use(bodyParser.json());

require('./books/routes')(api);
require('./colors/routes')(api);

api.listen(api.get('port'));
console.log('Marionette Wires is listening on port ' + api.get('port'));
