var     http = require('http'),
          fs = require('fs'),
     express = require('express'),
      config = require('config');

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || config.port);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(app.router);
  app.use(express.static('client'));
  app.use(express.errorHandler());
});

fs.readdirSync(__dirname + '/routes').forEach(
  function (file) {
    require('./routes/' + file)(app);
  }
);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
