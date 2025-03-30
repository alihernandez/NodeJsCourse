const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const landingRoutes = require("./routes/landing");
const usersRoutes = require("./routes/users");

app.use(bodyParser.urlencoded({extended: false}));

app.use("/", landingRoutes.routes);
app.use(usersRoutes);  

app.use((req, res, next) => {
    res.render('404', {docTitle: "Not Found"})
    });
  

app.listen(3000);

