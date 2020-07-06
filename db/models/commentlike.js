'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommentLike = sequelize.define('CommentLike', {
    userId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {});
  CommentLike.associate = function (models) {
    CommentLike.belongsTo(models.Comment, { foreignKey: "commentId" })
  };
  return CommentLike;
};
