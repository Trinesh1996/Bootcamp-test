function yearsAgo(p){
  var fullyear = new Date();
  var a = fullyear.getFullYear();
  var b = a - p;
  return b;

};
var final = yearsAgo(1910);
console.log(final);
