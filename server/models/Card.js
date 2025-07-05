const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  surgeonName: { type: String, required: true },
  procedure: { type: String, required: true },
  instruments: [String],
  notes: String
}, { timestamps: true });

module.exports = (mongooseConnection) => {
  try {
    return mongooseConnection.model('Card');
  } catch (err) {
    return mongooseConnection.model('Card', CardSchema, 'cards');
  }
};
