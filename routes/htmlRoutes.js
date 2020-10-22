var path = require("path");
let tableData = require("../data/tableData");
let waitData = require("../data/waitinglistData");

// ROUTING
module.exports = function (app) {

  app.get("/reserve", (req, res) => {
    res.render('reserve');
  });

  app.get("/tables", function (req, res) {
    res.render('tables', { tableData, waitData });
  });

  app.get("*", (req, res) => {
    res.render('main');
  });
};
