var countAllPaarl = function(reg){
  var paarl = [];
  var pReg = reg.split(", ");
  for (var i=0; i<pReg.length; i++){
    var regNum = pReg[i];
    if (regNum.startsWith("CJ")){
      paarl.push(regNum);
    }
  }return paarl.length;
}

var countPaarl = countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123");
console.log(countPaarl);
