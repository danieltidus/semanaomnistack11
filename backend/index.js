const express = require('express');

const app = express();

app.get('/users', (request, response) => response.json({
  evento: 'Semana Omni Stack 11.0',
  aluno: 'Daniel Faustino',
}));

app.listen(3333);
