// Dependencies
const events = require('express').Router()
const db = require('../models')
const { Event } = db
const { Op } = require('sequelize')

// Routes

// Show
events.get('/', async (req, res) => {
  try {
    const foundEvents = await Event.findAll({
      order: [['start_time', 'ASC']],
      where: {
        event_name: {
          [Op.like]: `%${req.query.event_name ? req.query.event_name : ''}%`,
        },
      },
    })
    res.status(200).json(foundEvents)
  } catch (err) {
    res.status(500).json(err)
  }
})

// POST Create
events.post('/', async (req, res) => {
  try {
    const newEvent = await Event.create(req.body)
    res.status(200).json({
      message: 'Created new event',
      data: newEvent,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// UPDATE Put
events.put('/:id', async (req, res) => {
  try {
    const updatedEvent = Event.update(req.body, {
      where: {
        event_id: req.params.id,
      },
    })
    res.status(200).json({
      message: `successfully updated ${updatedEvent} band(s)`,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// DELETE
events.delete('/:id', async (req, res) => {
  try {
    const deletedEvent = Event.destroy({
      where: {
        event_id: req.params.id,
      },
    })
    res.status(200).json({
      message: `deleted event ${deletedEvent}`,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get single id
events.get('/:id', async (req, res) => {
  try {
    const foundEvent = await Event.findOne({
      where: { event_id: req.params.id },
    })
    res.status(200).json(foundEvent)
  } catch (err) {
    res.status(500).json(err)
  }
})

// Export
module.exports = events
