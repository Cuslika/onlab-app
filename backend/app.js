const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.use(require("./lib/routes.js"));

app.listen(3001, function() {
   console.log("Connected");
})

module.exports = app;