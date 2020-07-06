'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommentDislike = sequelize.define('CommentDislike', {
    userId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {});
  CommentDislike.associate = function (models) {
    CommentDislike.belongsTo(models.Comment, { foreignKey: "commentId" })
  };
  return CommentDislike;
};
