var express = require("express")
var Sequelize = require("sequelize")

// What talks to the database. 

module.exports = function (Comment) {
  var router = express.Router() // makes the router.

  // gets all the comments of the comment table.
  router.get("/comments", function (req, res, next) {
    Comment.findAll().then(comments => {
      return res.json(comments)
    })
  })
  // posts a comment to the table.
  router.post("/comments", function (req, res, next) {
    Comment.create(req.body).then((data) => {
      return res.status(201).send("ok")
    }).catch(err => {
      if (err instanceof Sequelize.ValidationError) {
        let messages = err.errors.map((e) => e.message)
        return res.status(500).json(messages)
      }
      return next(err)
    })
  })
  // deletes a comment based on its ID.
  router.delete("/comments/:id", function (req, res, next) {
    Comment.destroy({ where: { id: req.params.id } }).then(() => {
      return res.send("ok")
    }).catch(err => next(err))

  })

  return router

}