const { Router } = require('express');
const http =  require('http');

const routes = Router();

function chamada(response, tipo){
  if(tipo == "ucl"){
    var url = "http://api.football-data.org/v2/competitions/2001/teams";
  } else if(tipo == 'bra'){
    var url = "http://api.football-data.org/v2/competitions/2013/teams";
  }
  else if(tipo == 'uel'){
    var url = "http://api.football-data.org/v2/competitions/2146/teams";
  }
  var apiKey = "9748c352c8d847569d6b752d90f6ceaf";

  var options = {
    method: "GET",
    headers: {
      "X-Auth-Token": apiKey
    }
  };

  var data = "";

  let apiRequest = http.request(url, options, function(res) {
    res.on("data", chunk => {
      data += chunk;
    });

    res.on("end", () => {
      response.end(JSON.stringify(data));
    });
  });

  apiRequest.end();
};

routes.get('/ucl', (request, response) => {
  var tipo = "ucl";

  chamada(response, tipo);
});

routes.get('/bra', (request, response) => {
  var tipo = "bra";
  
  chamada(response, tipo);
});

routes.get('/uel', (request, response) => {
  var tipo = "uel";
  
  chamada(response, tipo);
});

module.exports = routes;