describe("yearsAgo", function(){
  it('yearsAgo returns difference from the curent date to given year', function(){
    assert.equal(23, yearsAgo("1995"));
  });

  it('yearsAgo returns difference from the curent date to given year', function(){
    assert.equal(yearsAgo("1991"), 27);
  });
});
