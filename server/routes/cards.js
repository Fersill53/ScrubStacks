const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// GET all cards
router.get('/', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new card
router.post('/', async (req, res) => {
  const { surgeonName, procedure, instruments, notes } = req.body;
  const card = new Card({ surgeonName, procedure, instruments, notes });
  try {
    const saved = await card.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update card
router.put('/:id', async (req, res) => {
  try {
    const updated = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE card
router.delete('/:id', async (req, res) => {
  try {
    await Card.findByIdAndDelete(req.params.id);
    res.json({ message: 'Card deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
