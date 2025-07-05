const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const getCardModel = require('../models/Card');

router.use((req, res, next) => {
  req.Card = getCardModel(mongoose.connection);
  next();
});

// GET all cards
router.get('/', async (req, res) => {
  try {
    const cards = await req.Card.find();
    console.log('✅ Fetched cards:', cards);
    res.json(cards);
  } catch (err) {
    console.error('❌ Error in GET /api/cards:', err);
    res.status(500).json({ message: err.message });
  }
});

// POST new card
router.post('/', async (req, res) => {
  try {
    const { surgeonName, procedure, instruments, notes } = req.body;
    const card = new req.Card({ surgeonName, procedure, instruments, notes });
    const saved = await card.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update card
router.put('/:id', async (req, res) => {
  try {
    const updated = await req.Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE card
router.delete('/:id', async (req, res) => {
  try {
    await req.Card.findByIdAndDelete(req.params.id);
    res.json({ message: 'Card deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
