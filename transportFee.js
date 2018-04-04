function transportFee(shift){
  if (shift == "morning"){
    return "R20";
  }
  else if (shift == "afternoon"){
    return "R10";
  }
  else{
    return "free";
  }
}

var log = transportFee("morning");
console.log(log);
