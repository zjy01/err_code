const urlUtil = require('url');

safeUrl('http://www.liangshunet.com/ca/201306/453800003.htm');

function safeUrl (url) {
  var pHost = urlUtil.parse(url).host;
  pHost = pHost.substring(pHost.indexOf('.'));
  var r = new RegExp(pHost);
  console.log(r);
  console.log(new RegExp(pHost).test(pHost));
}
