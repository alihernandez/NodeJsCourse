const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const { extname } = require("path");

const app = express();

app.engine('hbs', expressHbs({layoutsDir: "views/layouts/", defaultLayout: "main-layout", extname: "hbs"}));
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require("./routes/admin");

const shopRoutes = require("./routes/shop");
const path = require("path");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);

app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.render('404', {docTitle: "Not Found"})
    });

app.listen(3000);