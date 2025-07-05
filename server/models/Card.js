const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  surgeonName: { type: String, required: true },
  procedure: { type: String, required: true },
  instruments: [String],
  notes: String
}, { timestamps: true });

function getCardModel(connection) {
  try {
    return connection.model('Card');
  } catch (e) {
    return connection.model('Card', CardSchema, 'cards');
  }
}

module.exports = getCardModel;
