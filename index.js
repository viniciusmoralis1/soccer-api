const express = require('express');
const http =  require('http');
const app = express();

app.get('/', (request, response) => {
  var apiKey = "9748c352c8d847569d6b752d90f6ceaf";
  var url = "http://api.football-data.org/v2/competitions/2001/teams";

  var options = {
    method: "GET",
    headers: {
      "X-Auth-Token": apiKey
    }
  };

  var data = "";

  let apiRequest = http.request(url, options, function(res) {
    console.log("conectado");

    res.on("data", chunk => {
      data += chunk;
    });

    res.on("end", () => {
      response.end(JSON.stringify(data));
    });
  });

  apiRequest.end();
});

http.createServer(app).listen(3333);
