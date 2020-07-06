'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('StoryDislikes', [
            {
                storyId: 2, userId: 1,
                createdAt: new Date(), updatedAt: new Date()
            },


        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('StoryDislikes', null, {});
    }
};
