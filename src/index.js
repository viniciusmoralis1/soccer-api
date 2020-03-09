const express = require('express');
const http =  require('http');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

http.createServer(app).listen(3333);
