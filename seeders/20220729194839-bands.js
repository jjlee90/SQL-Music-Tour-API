"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("bands", [
      {
        name: "Paramore",
        genre: "Rock",
        available_start_time: "2022-08-01 15:00:00",
        end_time: "2022-08-01 16:00:00",
      },
      {
        name: "Gareth Emery",
        genre: "Trance",
        available_start_time: "2022-08-01 17:00:00",
        end_time: "2022-08-01 18:00:00",
      },
      {
        name: "Taylor Swift",
        genre: "Pop",
        available_start_time: "2022-08-01 18:00:00",
        end_time: "2022-08-01 19:00:00",
      },
      {
        name: "Tiesto",
        genre: "EDM",
        available_start_time: "2022-08-01 21:00:00",
        end_time: "2022-08-01 22:00:00",
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("bands", null, {})
  },
}
