'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports' , [
        {
          name : "ABC Airport",
          cityId : 4,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name : "asd Airport",
          cityId : 14,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name : "efa Airport",
          cityId : 4,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name : "sdf Airport",
          cityId : 8,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name : "jyu Airport",
          cityId : 4,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name : "gsgf Airport",
          cityId : 12,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name : "fdgj Airport",
          cityId : 13,
          createdAt : new Date(),
          updatedAt : new Date()
        },
        {
          name : "sdfg Airport",
          cityId : 12,
          createdAt : new Date(),
          updatedAt : new Date()
        }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
