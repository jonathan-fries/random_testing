
export function localRandom(min, max, iterations, delay){
  var randoms = { };
  var i = 0;
  return myLoop(min, max, i, iterations, randoms, delay);
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function myLoop (min, max, i, iterations, rs, delay) {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
     var currentRandom = getRandomIntInclusive(min, max);
     var randomName = currentRandom.toString();
     if(rs[randomName])
     {
       rs[randomName] = rs[randomName] + 1;
     }
     else {
       rs[randomName] = 1;
     }
      i++;                     //  increment the counter
      if (i < iterations) {            //  if the counter < 10, call the loop function
         return myLoop(min, max, i, iterations, rs, delay);             //  ..  again which will trigger another
      }
      else {
          return rs;
      }
   }, delay)
}
