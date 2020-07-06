'use strict';
const bcrypt = require("bcryptjs");
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [

      {
        userName: 'Andras1',
        password: bcrypt.hashSync('P@ssw0rd3', 10),
        firstName: 'Andras',
        lastName: 'S',
        email: 'andras@test.com',
        bio: 'Hi there, my name is Andras!',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'aPp1',
        password: bcrypt.hashSync('P@ssw0rd5', 10),
        firstName: 'App1',
        lastName: 'Academy',
        email: 'app1@academy.com',
        bio: 'Hi there, my name is App1',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'aPp2',
        password: bcrypt.hashSync('P@ssw0rd6', 10),
        firstName: 'App2',
        lastName: 'Academy',
        email: 'app2@academy.com',
        bio: 'Boy, I sure do like writing!',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'aPp3',
        password: bcrypt.hashSync('P@ssw0rdLunder', 10),
        firstName: 'App3',
        lastName: 'Academy',
        email: 'app3@academy.com',
        bio: "Hi there! My name is App3. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'aPp4',
        password: bcrypt.hashSync('P@ssw0rdWilde', 10),
        firstName: 'App4',
        lastName: 'Academy',
        email: 'app4@academy.com',
        bio: "Hi there! My name is App4. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'aPp5',
        password: bcrypt.hashSync('P@ssw0rdShelly', 10),
        firstName: 'App4',
        lastName: 'Academy',
        email: 'app5@academy.com',
        bio: "Hi there! My name is App5. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'aPp6',
        password: bcrypt.hashSync('P@ssw0rdDefoe', 10),
        firstName: 'App6',
        lastName: 'Academy',
        email: 'app6@academy.com',
        bio: "Hi there! My name is App6. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'aPp7',
        password: bcrypt.hashSync('P@ssw0rdGilman', 10),
        firstName: 'App7',
        lastName: 'Academy',
        email: 'app7@academy.com',
        bio: "Hi there! My name is App7. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'aPp8',
        password: bcrypt.hashSync('P@ssw0rdDickens', 10),
        firstName: 'App8',
        lastName: 'Academy',
        email: 'app8@academy.com',
        bio: "Hi there! My name is App8. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'aPp9',
        password: bcrypt.hashSync('P@ssw0rdDoyle', 10),
        firstName: 'App9',
        lastName: 'Academy',
        email: 'app9@academy.com',
        bio: "Hi there! My name is App9. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'aPp10',
        password: bcrypt.hashSync('P@ssw0rdMelville', 10),
        firstName: 'App10',
        lastName: 'Academy',
        email: 'app10@academy.com',
        bio: "Hi there! My name is App10. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'aPp11',
        password: bcrypt.hashSync('P@ssw0rdStevenson', 10),
        firstName: 'App11',
        lastName: 'Academy',
        email: 'app11@academy.com',
        bio: "Hi there! My name is App11. I really enjoy writing stories and I hope you take the time to read them!",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'GuestUser',
        password: bcrypt.hashSync('P@ssw0rd', 10),
        firstName: 'Guest',
        lastName: 'User',
        email: 'guest@user.com',
        bio: "I am just looking around this website to see if I like it.",
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
