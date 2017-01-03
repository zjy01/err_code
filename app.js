var app = require('koa')()
  , koa = require('koa-router')()
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , onerror = require('koa-onerror');

var index = require('./routes/index');
var code = require('./routes/code');
var users = require('./routes/users');
var notify = require('./routes/notify');
var cache = require('./routes/cache');
// global middlewares
app.use(views('views', {
  root: __dirname + '/views',
  default: 'ejs'
}));
app.use(require('koa-bodyparser')());
app.use(function *(next) {
  this.body = this.request.body;
  yield next;
});
app.use(json());
app.use(logger());
app.use(function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
koa.use('/', index.routes(), index.allowedMethods());
koa.use('/code', code.routes(), code.allowedMethods());
koa.use('/test', users.routes(), users.allowedMethods());
koa.use('/notify', notify.routes(), notify.allowedMethods());
koa.use('/cache', cache.routes(), notify.allowedMethods());

// mount root routes
app.use(koa.routes());

app.on('error', function (err, ctx) {
  console.log(err);
  // logger.error('server error', err, ctx);
});

module.exports = app;
