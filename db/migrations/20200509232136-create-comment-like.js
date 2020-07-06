'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CommentLikes', {
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
      commentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Comments" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('CommentLikes', ['commentId', 'userId'], {
      type: 'unique',
      name: ''
    }));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CommentLikes');
  }
};
