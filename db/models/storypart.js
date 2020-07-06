'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoryPart = sequelize.define('StoryPart', {
    body: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER,
    orderNo: DataTypes.INTEGER
  }, {});
  StoryPart.associate = function (models) {
    StoryPart.belongsTo(models.User, { foreignKey: 'userId' });
    StoryPart.belongsTo(models.Story, { foreignKey: 'storyId' })
  };
  return StoryPart;
};
