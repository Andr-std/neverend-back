'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StoryParts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      body: {
        allowNull: false,
        type: Sequelize.TEXT
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
      orderNo: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('StoryParts', ['storyId', 'orderNo'], {
      type: 'unique',
      name: ''
    }));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StoryParts');
  }
};
