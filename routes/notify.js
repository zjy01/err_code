var router = require('koa-router')();
var i = 0;
router.post('/', function *(next) {
  if(this.body.eid == 2){
    i++;
    console.log(`${i}success===${this.body.node_name}_${this.body.msg}`);
  }
  else if(this.body.eid == 99){
    console.log(`fail===${this.body.node_name}_${this.body.msg}`);
  }
  else if(this.body.eid == 999){
    console.log(`error===${this.body.node_name}`);
  }
  else{}
  this.body = {'ret': 0}
});
module.exports = router;
