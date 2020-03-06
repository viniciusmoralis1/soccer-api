const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    message: "Deu certo cara"
  });
});

app.listen(3333);
