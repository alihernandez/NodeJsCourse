const express = require('express');
const bodyParser = require("body-parser");

const app = express();

const path = require('path');

const oneRoutes = require('./routes/pageOne');
const twoRoutes = require('./routes/pageTwo');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));



app.use(oneRoutes);
app.use(twoRoutes);

app.listen(3000);