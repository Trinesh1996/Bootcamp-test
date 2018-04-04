function regCheck(reg, loc){
  var rep = reg.endsWith(loc);
  return rep;
}

var info = regCheck('DV 23 NB GP', 'GP');
console.log(info);
