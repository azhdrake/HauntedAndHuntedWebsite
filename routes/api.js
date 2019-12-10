var express = require("express")
var Sequelize = require("sequelize")

module.exports = function (Comment) {
  var router = express.Router()

  router.get("/comments", function (req, res, next) {
    Comment.findAll().then(comments => {
      return res.json(comments)
    })
  })

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

  router.delete("/comments/:id", function (req, res, next) {
    //DELETE FROM students WHERE ID = id
    Comment.destroy({ where: { id: req.params.id } }).then(() => {
      return res.send("ok")
    }).catch(err => next(err))

  })

  return router

}