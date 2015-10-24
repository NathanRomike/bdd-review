describe('beerSong', function(){
  it("Adds the lyrics to the song around user's input", function(){
    expect(beerInput(99)).should.equal("99 bottles of beer on the wall,")
  });
  
  it("Counts down from the user's input", function(){
    expect(beerInput(99)).to.equal(98);
  });
});
