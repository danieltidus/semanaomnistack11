const express = require('express');
const cors = require('cors');

const routes = require('./routes');


const app = express();

app.use(cors);
// Indicate to express that requisitions will be send in json formmat
app.use(express.json());
app.use(routes);

app.listen(3333);
