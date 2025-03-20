const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('In the middleware');
//     next();
// });
// app.use((req, res, next) => {
//     console.log('In the other middleware');
//     res.send('<h1>Hello from the Express App</h1>');
//     next();
// });

app.use('/users', (req, res, next) => {
    console.log('In the "/users" middleware');
    res.send('<h1>users page</h1>')
});

app.use('/', (req, res, next) => {
    console.log('In the "/" middleware');
    res.send('<h1>Hello from Express App</h1>');
});

app.listen(3000);