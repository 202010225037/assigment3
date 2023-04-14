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
   await queryInterface.bulkInsert("Photos", [{
    title: "Photo 1",
    caption: "ini Foto 1",
    image_url: "http://1/1231231232/123123",
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    title: "Photo 1",
    caption: "ini Foto 2",
    image_url: "http://2/1231231232/123123",
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    title: "Photo 1",
    caption: "ini Foto 1",
    image_url: "http://2/1231231232/123123",
    createdAt: new Date(),
    updatedAt: new Date()
   },
  ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Photos", null, {})
  }
};
