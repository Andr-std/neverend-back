'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('CommentDislikes', [
            {
                commentId: 6, userId: 7,
                createdAt: new Date(), updatedAt: new Date()
            },


        ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('CommentDislikes', null, {});
    }
};
