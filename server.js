var express = require("express");
const bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;
const hbs = require('express-handlebars');
app.use(express.static('public'));
app.set('view engine', 'hbs');

app.engine('hbs', hbs({
  layoutsDir: `${__dirname}/views/layouts`,
  extname: 'hbs',
  defaultLayout: 'index'
}));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

// ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
