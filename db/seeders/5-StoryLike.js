'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StoryLikes', [
      {
        storyId: 1, userId: 1,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 1, userId: 2,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 1, userId: 3,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 4,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 7,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 5,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 10,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 6,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 3, userId: 1,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 3, userId: 7,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 3, userId: 8,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 3, userId: 9,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 3, userId: 10,
        createdAt: new Date(), updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StoryLikes', null, {});
  }
};
