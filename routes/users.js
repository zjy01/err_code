var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('users', {
    title: 'users!'
  });
});

module.exports = router;
