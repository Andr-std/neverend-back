'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoryLike = sequelize.define('StoryLike', {
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER
  }, {});
  StoryLike.associate = function (models) {
    StoryLike.belongsTo(models.Story, { foreignKey: "storyId" })
  };
  return StoryLike;
};
