describe('beerSong', function(){
  it("Counts down from the user's input", function(){
    expect(beerSong(99)).to.equal(98);
  });

  it("Shows a different verse for the last input", function(){
    expect(beerSong(0)).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
});
