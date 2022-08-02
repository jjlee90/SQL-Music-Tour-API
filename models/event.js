'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    // stages
    static associate({ Stage, Stage_Event, Meet_greet, Set_time }) {
      Event.belongsToMany(Stage, {
        foreignKey: 'event_id',
        as: 'stages',
        through: Stage_Event,
      }),
        Event.hasMany(Meet_greet, {
          foreignKey: 'event_id',
          as: 'meet_greets',
        })
      Event.hasMany(Set_time, {
        foreignKey: 'event_id',
        as: 'set_times',
      })
    }
  }
  Event.init(
    {
      event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      event_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stage_id: { type: DataTypes.INTEGER, allowNull: false },
      date: { type: DataTypes.DATE, allowNull: false },
      start_time: { type: DataTypes.DATE, allowNull: false },
      end_time: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: 'Event',
      tableName: 'events',
      timestamps: false,
    }
  )
  return Event
}
