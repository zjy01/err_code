var router = require('koa-router')();
router.get('/index', function *(next) {
  this.status = 301;
  this.redirect('/javascripts/index.js');
});
router.get('/edit', function *(next) {
  this.status = 302;
  this.body = 'Redirecting to javascripts';
  this.redirect('/javascripts/edit.js');
});
router.get('/e401', function *(next) {
  this.throw(401, 'name required');
});
router.get('/e403', function *(next) {
  this.throw(403, 'fob');
});
router.get('/e503', function *(next) {
  this.status = 503;
});
router.get('/e500', function *(next) {
  this.status = 500;
});


module.exports = router;
