
export function localRandom(min, max, iterations){
  var i = 0;
  var currentRandom;
  var randomName;
  var randoms = { };
  for(i; i< iterations; i++)
  {
    currentRandom = getRandomIntInclusive(min, max);
    randomName = currentRandom.toString();
    if(randoms[randomName])
    {
      randoms[randomName] = randoms[randomName] + 1;
    }
    else {
      randoms[randomName] = 1;
    }
  }
  return randoms;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
