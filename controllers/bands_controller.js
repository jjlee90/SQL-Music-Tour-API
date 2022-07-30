// Dependencies
const bands = require("express").Router()
const db = require("../models")
const { Band } = db

// Routes

// SHOW (get all bands)
bands.get("/", async (req, res) => {
  try {
    const foundBands = await Band.findAll()
    res.status(200).json(foundBands)
  } catch (err) {
    res.status(500).json(err)
  }
})

// POST Create new band
bands.post("/", async (req, res) => {
  try {
    const newBand = await Band.create(req.body)
    res.status(200).json({
      message: "Successfully inserted a new band",
      data: newBand,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// UPDATE band
bands.put("/:id", async (req, res) => {
  try {
    const updatedBands = await Band.update(req.body, {
      where: {
        band_id: req.params.id,
      },
    })
    res.status(200).json({
      message: `Successfully updated ${updatedBands} band(s)`,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// DELETE Band
bands.delete("/:id", async (req, res) => {
  try {
    const deletedBands = await Band.destroy({
      where: {
        band_id: req.params.id,
      },
    })
    res.status(200).json({
      message: `Successfully deleted ${deletedBands} band(s)`,
    })
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get single band by id
bands.get("/:id", async (req, res) => {
  try {
    const foundBand = await Band.findOne({
      where: { band_id: req.params.id },
    })
    res.status(200).json(foundBand)
  } catch (err) {
    err.status(500).json(err)
  }
})

// Export
module.exports = bands
