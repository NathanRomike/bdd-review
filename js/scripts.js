var beerSong = function (beers) {
  if (beers > 0) {
     return beers + " bottles of beer on the wall, " + beers + " bottles of beer.";
     var oneless = beers - 1;
     return "Take one down and pass it around, " + oneless + " bottles of beer on the wall."
   } else {
     return "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.";
   }
 };
