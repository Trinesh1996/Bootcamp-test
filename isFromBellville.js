function isFromBellville(num){
  var isFrom = num.startsWith("CY");

  return isFrom;
};

var registration = isFromBellville("CY")
console.log(registration);
