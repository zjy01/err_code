window.onload = function () {
  var err = '', i = 0;
  while(i < 1000) {
    err += ' err' + i;
    i++;
  }
  throw Error(err);
};
