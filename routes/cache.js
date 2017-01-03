var router = require('koa-router')();
router.get('/index', function *(next) {
  let count = Number(this.cookies.get('count')) || 1;
  count ++;
  this.cookies.set('count', count);
  yield this.render('cache', {
    title: 'Test the cache',
    count
  });
});
router.get('/cachecontrol', function *() {
  this.set('Cache-Control', `public, max-age=${1000 * 60 * 60}`);
  this.body = {
    time: new Date().toLocaleString()
  };
});
router.get('/expires', function *() {
  const now = new Date();
  const ext = new Date(now.setDate(now.getDate() + 1));
  this.set('Expires', ext.toLocaleString());
  this.body = {
    time: new Date().toLocaleString()
  };
});

router.get('/lastmodified', function *() {
  // this.set('Cache-Control', `public, max-age=${1000 * 60 * 60}`);
  if(this.get('If-Modified-Since')) {
    this.status = 304;
  }
  else{
    this.set('Last-modified', new Date("2017/01/03 15:03").toLocaleString());
    this.body = {
      time: new Date().toLocaleString()
    };
  }
});
router.get('/etag', function *() {
  if(this.get('If-None-Match')) {
    this.status = 304;
  }
  else{
    this.set('ETag', '1111');
    this.body = {
      time: new Date().toLocaleString()
    };
  }
});


module.exports = router;
