module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define("Comment", {
    pageNumber: { type: DataTypes.INTEGER },
    user: { type: DataTypes.STRING },
    comment: { type: DataTypes.STRING }
  })

  Comment.sync({ force: true }).then(() =>
    console.log("synced table"))

  return Comment
}