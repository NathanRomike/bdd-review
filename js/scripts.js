var beerSong = function (beers) {
  if (beers === 0) {
    return "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
  } else {
    return beers - 1;
  }
};
