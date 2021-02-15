const { response, request } = require('express');
const express = require('express');

const app = express();

app.get('/projects', (request,response) => {
  return response.json({
    name:"joao",
    idade:17,
  });
});

app.listen(3333);