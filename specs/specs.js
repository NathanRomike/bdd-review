describe('beerSong', function(){
  it("Combines the user's input with the song verses", function(){
    expect(beerSong(3)).to.equal("3 bottles of beer on the wall, 3 bottles of beer.");
  });

  it("Counts down from the user's input", function(){
    expect(beerSong(99)).to.equal("99 bottles of beer on the wall, 99 bottles of beer. Take one down and pass it around, 98 bottles of beer on the wall.");
  });

  it("Shows a different verse for the last input", function(){
    expect(beerSong(0)).to.equal("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
  });
});
