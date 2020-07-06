'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        storyId: 1, userId: 1,
        body: "So **dark**! So **brooding**!",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 1, userId: 5,
        body: "I'm *very* proud of this one!",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 1, userId: 6,
        body: "## Keep on writing! Don't stop!",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 7,
        body: "I **don't** like this at all.",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 1,
        body: `Everyone says:
        > This is my favorite piece of writing.`,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 9,
        body: "Crazy stuff, man!",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 3, userId: 10,
        body: "How orig.",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 3, userId: 11,
        body: "You're such a great writer! Keep up the good work!",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 3, userId: 1,
        body: "First!",
        createdAt: new Date(), updatedAt: new Date()
      },

      {
        storyId: 3, userId: 8,
        body: "I have no idea what is going on in this story.",
        createdAt: new Date(), updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
