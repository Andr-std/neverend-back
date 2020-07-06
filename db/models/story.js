'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: DataTypes.STRING,
    subHeading: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    isEditLock: DataTypes.BOOLEAN
  }, {});
  Story.associate = function (models) {
    Story.belongsTo(models.User, { foreignKey: 'userId' });
    Story.belongsTo(models.StoryCategory, { foreignKey: 'categoryId' })
    Story.hasMany(models.StoryPart, { foreignKey: 'storyId' });
    const columnMapping = {
      foreignKey: 'storyId',
      through: 'StoryLikes',
      otherKey: 'userId'
    };
    Story.belongsToMany(models.User, columnMapping)
    const columnMap = {
      foreignKey: 'storyId',
      through: 'StoryDislikes',
      otherKey: 'userId'
    };
    Story.belongsToMany(models.User, columnMap)
  };
  return Story;
};
