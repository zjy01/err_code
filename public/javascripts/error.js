var arg1 = 0;
setTimeout(function () {
  Math.max(arg1, arg3);
}, 1);

var result = add(arg1);
console.log(result);
function add (a, b) {
  return parse(a) + parse(b);
}

function parse (c) {
  return parse1(c);
}

function parse1 (e) {
  return parse2(e);
}
function parse2 (e) {
  return JSON.parse(c);
}
