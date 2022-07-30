"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("set_times", [
      {
        event_id: 2,
        stage_id: 1,
        band_id: 2,
        genre: "R&B",
        start_time: "2022-08-02 15:00:00",
        end_time: "2022-08-02 16:00:00",
      },
      {
        event_id: 3,
        stage_id: 2,
        band_id: 3,
        genre: "Rock",
        start_time: "2022-08-02 15:00:00",
        end_time: "2022-08-02 16:00:00",
      },
      {
        event_id: 4,
        stage_id: 3,
        band_id: 4,
        genre: "Trance",
        start_time: "2022-08-02 15:00:00",
        end_time: "2022-08-02 16:00:00",
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("set_times", null, {})
  },
}
