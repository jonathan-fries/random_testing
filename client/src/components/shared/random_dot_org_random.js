var license = require('./random_license.js');
const request = require('request');

export function randomDotOrgRandom(min, max, iterations){
  var randoms = { };
  var jsonRequest = {
        "jsonrpc" : "2.0",
        "method":"generateIntegers",
        "params": {
          "apiKey":license.random_org_license,
          "n":iterations,
          "min":min,
          "max":max,
          "replacement":true,
          "base":10
          },
        "id":5251
        }

        var options = {
          uri : 'https://api.random.org/json-rpc/2/invoke',
          method: 'POST',
          json: jsonRequest,
          headers: {"content-type": "application/json"}
        }

      request(options, (err, res, body) => {
        if (err) {
          return console.log(err);
        }
        //console.log(body);
        var randomNumbers = body.result.random.data;
        var currentRandom;
        var randomName;
        var i = 0;

        for(i; i< randomNumbers.length; i++)
        {
          currentRandom = randomNumbers[i];
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

      });

}
