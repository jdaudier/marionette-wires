var app = require('./api/api');
var serveStatic = require('serve-static');
app.set('port', process.env.PORT || 3000);
app.use(serveStatic('dist', {'index': ['index.html']}));

app.listen(app.get('port'));

console.log('Marionette Wires is listening on port ' + app.get('port'));
