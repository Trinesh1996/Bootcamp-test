function isWeekday(day){
  var isWeekdays = ! day.startsWith("S");
  return isWeekdays;

};

var Weekday = isWeekday("Tuesday");
console.log(isWeekday);
