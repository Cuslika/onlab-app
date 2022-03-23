const express = require("express")
const routes = require("./lib/routes.js")
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3001, function() {
   console.log("Connected")
})

module.exports = app;