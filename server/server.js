const express = require('express');
const routes = require('./routes');
var cors = require('cors');

const app = express();

app.use(cors());
app.use(routes);

app.listen(3001, ()=> console.log('Node Server is running'));