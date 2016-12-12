var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('users', {
    title: 'users!'
  });
});
router.get('/deadlock', function *(next) {
  yield this.render('deadlock', {
    title: 'deadlock!'
  });
});
router.get('/alert', function *(next) {
  yield this.render('alert', {
    title: 'alert!'
  });
});
router.get('/ajax', function *(next) {
  yield this.render('ajax', {
    title: 'ajax!'
  });
});
router.get('/other', function *(next) {
  yield this.render('other', {
    title: 'other!'
  });
});
router.get('/only', function *(next) {
  this.body = 'only';
});

module.exports = router;
