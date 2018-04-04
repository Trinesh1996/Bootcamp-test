function mostProfitableDepartment(departo){
  var listObject = {};
  var departed = "";
  var num = 0;

  for (var i = 0; i<departo.length; i++){
    var depart = departo[i].department;

    if (listObject[depart] === undefined){
      	listObject[depart] = 0;
      }
    listObject[depart] += departo[i].sales;
 	//console.log(departo[i]);
  }
  for (var d in listObject){
    if (listObject[d] > num){
      num = listObject[d];
      departed = d;
    }
  }
  return departed;
}

function mostProfitableDay(departo){
  var salesD = {};
  var departed = "";
  var num = 0;

  for (var i = 0; i<departo.length; i++){
    var depart = departo[i].day;

    if (salesD[depart] === undefined){
      	salesD[depart] = 0;
      }
    salesD[depart] += departo[i].sales;
 	//console.log(departo[i]);
  }
  for (var d in salesD){
    if (salesD[d] > num){
      num = salesD[d];
      departed = d;
    }
  }
  return departed;

}
