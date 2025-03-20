const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
	console.log("in the 2nd middleware");
	res.send('<h1>Add Product Page</h1>')
});

app.use('/', (req, res, next) => {
	console.log("in the middleware");
	res.send('<h1>Hello from express</h1>')
});

app.listen(3000);