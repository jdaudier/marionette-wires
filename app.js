var app = require('./api/api');
var serveStatic = require('serve-static');

app.use(serveStatic('dist'));
app.listen(3000);

console.log('Marionette Wires is listening on port 3000');
