// it's the database server config file!

var express = require("express")
var bodyParser = require("body-parser")
var Sequelize = require("sequelize")
var api_routes = require("./routes/api.js")
var path = require("path")

db_url = process.env.DATABASE_URL

//config Sequelize, ensure that we're using the approprate database for local vs live.

let sequelize

if (db_url) {
  sequelize = new Sequelize(db_url, {
    dialect: "postgres",
  })

  sequelize.authenticate()
    .then(() => console.log("Connected to Postgres"))
    .catch(err => console.log(err))
} else {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite3"
  })

  sequelize.authenticate()
    .then(() => console.log("connected to sqlite"))
    .catch(err => console.log("error connecting", err))
}

// uses the comment table model
let comment = require("./model/Comments.js")(sequelize, Sequelize)

//gets an express app, tells it that we're using JSON, gives it the client site and the comment table model
var app = express()
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, "webcomic-website", "dist")))


app.use("/api", api_routes(comment))

// error handling
app.use(function (req, res, next) {
  res.status(404).send("Not Found")
})

app.use(function (err, req, res, next) {
  console.log(err.stack)
  res.status(500).send("Server Error")
})

// makes sure we're using the appropreate port for local vs live. 
var server = app.listen(process.env.PORT || 3000, function () {
  console.log("app running on port", server.address().port)
})
