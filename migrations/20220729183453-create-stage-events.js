"use strict"
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("stage_events", {
      stage_events_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      stage_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("stage_events")
  },
}
