"use strict"

const { DataTypes } = require("sequelize")

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("meet_greets", "event_id", {
      type: DataTypes.INTEGER,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("meet_greets", "event_id")
  },
}
