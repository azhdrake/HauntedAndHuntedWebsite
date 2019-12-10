var express = require("express")
var bodyParser = require("body-parser")
var Sequelize = require("sequelize")
var api_routes = require("./routes/api.js")
var path = require("path")

let sequelize

sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite3"
})

sequelize.authenticate()
  .then(() => console.log("connected to sqlite"))
  .catch(err => console.log("error connecting", err))

let comment = require("./model/Comments.js")(sequelize, Sequelize)

var app = express()
app.use(bodyParser.json())


app.use("/api", api_routes(comment))


app.use(function (req, res, next) {
  res.status(404).send("Not Found")
})

app.use(function (err, req, res, next) {
  console.log(err.stack)
  res.status(500).send("Server Error")
})

var server = app.listen(process.env.PORT || 3000, function () {
  console.log("app running on port", server.address().port)
})
