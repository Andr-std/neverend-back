'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stories', [
      {
        title: "Mutability in JavaScript",
        subHeading: "What is mutability?",
        userId: 1,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        isEditLock: false
      },

      {
        title: "A Tale of Two Runtimes: Node.js vs Browser",
        subHeading: "Same specification, different implementation",
        userId: 8,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        isEditLock: false
      },

      {
        title: "Some of my Deepest Personal Thoughts",
        subHeading: "Please take time to read through them carefully",

        userId: 3,
        categoryId: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
        isEditLock: false
      },

      {
        title: "General Thoughts",
        subHeading: "On things in general",
        userId: 6,
        categoryId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        isEditLock: false
      },



    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
