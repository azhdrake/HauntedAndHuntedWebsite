//Initalizes the comment table, and its three columns: pageNumber, user, and comment.
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define("Comment", {
    pageNumber: { type: DataTypes.INTEGER },
    user: { type: DataTypes.STRING },
    comment: { type: DataTypes.STRING }
  })

  Comment.sync({ force: false }).then(() =>
    console.log("synced table"))

  return Comment
}