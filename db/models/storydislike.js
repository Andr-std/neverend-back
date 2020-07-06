'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoryDislike = sequelize.define('StoryDislike', {
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER
  }, {});
  StoryDislike.associate = function (models) {
    StoryDislike.belongsTo(models.Story, { foreignKey: "storyId" })
  };
  return StoryDislike;
};
