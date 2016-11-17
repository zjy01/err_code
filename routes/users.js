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

module.exports = router;
