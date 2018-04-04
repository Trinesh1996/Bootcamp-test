function countRegNumber(reg){
  var reg1 = reg.split(",");
  var reg2 = reg1.length;
  return reg2;
};

var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328');
assert.equal(regCount, 3);
