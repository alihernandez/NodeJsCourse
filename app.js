const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log("in the middleware");
	next();
});
app.use((req, res, next) => {
	console.log('in the next middleware');
});

app.listen(3000);