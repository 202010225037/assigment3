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
    title: "Foto pertama milik User ID 1",
    caption: "Ini Foto Pertama Milik User ID 1",
    image_url: "https://1/2381248927/1212121",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
  {
    title: "Foto kedua milik User ID 1",
    caption: "Ini Foto kedua Milik User ID 1",
    image_url: "https://2/2381248927/1212121",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
   },
   {
    title: "Foto ketiga milik User ID 1",
    caption: "Ini Foto Ketiga Milik User ID 1",
    image_url: "https://3/2381248927/1212121",
    UserId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
   }], {})
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
