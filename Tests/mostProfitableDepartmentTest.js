var info = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},

];

var info2 = [
  {department : 'outdoor', sales : 8507, day : 'Wednesday'},
  {department : 'carpentry', sales : 8009, day : 'Wednesday'},
  {department : 'hardware', sales : 12000, day : 'Thursday'},
  {department : 'outdoor', sales : 18007, day : 'Thursday'},
  {department : 'carpentry', sales : 6109, day : 'Thursday'},
  {department : 'hardware', sales : 7005, day : 'Friday'},
  {department : 'outdoor', sales : 12006, day : 'Friday'},
  {department : 'carpentry', sales : 16109, day : 'Friday'},
];

describe("mostProfitableDepartment", function(){

  it("returns most profitable department for dataset 1", function(){
    assert.deepEqual(mostProfitableDepartment(info), "hardware");
  });

  it("returns most profitable day for dataset 1", function(){
    assert.deepEqual(mostProfitableDay(info), "Tuesday");
  });

  it("returns most profitable department for dataset 2", function(){
    assert.deepEqual(mostProfitableDepartment(info2), "outdoor");
  });

  it("returns most profitable day for dataset 2", function(){
    assert.deepEqual(mostProfitableDay(info2), "Thursday");
  });
});




//it("returns most profitable department for dataset one", function(){
//  assert.deepEqual(mostProfitableDepartment(info), "hardware");
//});

//it("returns most profitable day for dataset one", function(){
//  assert.deepEqual(mostProfitableDay(info), "Tuesday");
//});


//it("returns most profitable department for dataset two", function(){
//  assert.deepEqual(mostProfitableDepartment(info2), "outdoor");
//});

//it("returns most profitable day for dataset two", function(){
//  assert.deepEqual(mostProfitableDay(info2), "Thursday");
//});

//)};
