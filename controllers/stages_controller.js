// Dependencies
const stages = require('express').Router()
const db = require('../models')
const { Stage, Event, Stage_Event } = db
const { Op } = require('sequelize')

// Routes

// Show (get all stages)
stages.get('/', async (req, res) => {
  try {
    const foundStages = await Stage.findAll({
      order: [['stage_id', 'ASC']],
      where: {
        stage_name: {
          [Op.like]: `%${req.query.stage_name ? req.query.stage_name : ''}%`,
        },
      },
    })
    res.status(200).json(foundStages)
  } catch (err) {
    res.status(500).json(err)
  }
})

// POST Create new stage
stages.post('/', async (req, res) => {
  try {
    const newStage = await Stage.create(req.body)
    res.status(200).json({
      message: 'created new stage',
      data: newStage,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// UPDATE stage
stages.put('/:id', async (req, res) => {
  try {
    const updatedStage = await Stage.update(req.body, {
      where: {
        stage_id: req.params.id,
      },
    })
    res.status(200).json({
      message: `Successfully updated ${updatedStage} band(s)`,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// DELETE stage
stages.delete('/:id', async (req, res) => {
  try {
    const deletedStage = await Stage.destroy({
      where: {
        stage_id: req.params.id,
      },
    })
    res.status(200).json({
      message: `Successfully deleted ${deletedStage} band(s)`,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get single stage by id
stages.get('/:name', async (req, res) => {
  try {
    const foundStage = await Stage.findOne({
      where: { stage_name: req.params.name },
      include: {
        model: Event,
        as: 'events',
        through: { attributes: [] },
      },
    })
    res.status(200).json(foundStage)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = stages
