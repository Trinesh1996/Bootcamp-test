var countAllFromTown = function(reg,s){
  var town = [];
  var tReg = reg.split(",");
  for (var i=0; i<tReg.length; i++){
    var newReg = tReg[i];
    if (newReg.startsWith(s)){
      town.push(newReg);
    }
  }return town.length;
}

var all = countAllFromTown('CL 124,CY 567,CL 345,CJ 456,CL 341', "CL");
console.log(all);
