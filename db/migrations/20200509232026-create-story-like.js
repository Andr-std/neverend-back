'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StoryLikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" }
      },
      storyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Stories" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('StoryLikes', ['storyId', 'userId'], {
      type: 'unique',
      name: ''
    }));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StoryLikes');
  }
};
