const mongoose = require('mongoose');
const { route } = require('../routes/cards');

const instrumentSchema = new mongoose.Schema({
  qty: Number,
  name: String,
  notes: String,
}, { _id: false });

const supplySchema = new mongoose.Schema({
  qty: Number,
  name: String,
  sizeOrNotes: String,
}, { _id: false });

const medicationSchema = new mongoose.Schema({
  name: String,
  dose: String,
  route: String,
  timing: String
}, { _id: false });

const sutureSchema = new mongoose.Schema({
  type: String,
  size: String,
  needle: String,
  useSite: String,
}, { _id: false});

//General info
const CardSchema = new mongoose.Schema({
  surgeonName: String,
  specialty: String,
  procedure: String,
  procedureCode: String,
  serviceLine: String,
  anesthesiaType: String,
  caseDuration: String,
  positioning: String,
  positioningAids: String,

  //Room setup
  roomType: String,
  tableType: String,
  bedOrientation: String,
  specialEquipment: [String],
  specialEquipmentOther: String,

  //Patient prep
  prepArea: String,
  prepSolution: String,
  hairRemoval: String,
  catheter: String,
  dvtProphylaxis: [String],

  //Draping
  drapes: [String],
  customDrapeInstructions: String,

  //Instruments
  instrumentsDetailed: [instrumentSchema],

  //Implants / Devices / Reps
  vendors: String,
  implants: String,
  repContact: String,
  repRequired: Boolean,
  

  //Supplies
  supplies: [supplySchema],
  suppliesOther: String,

  //Medications
  medications: [medicationSchema],
  medicationsOther: String,

  //Sutures
  sutures: [sutureSchema],

  //Closing Preferences
  closingPreferences: {
    sutureType: String,
    closureTechnique: String,
  },

  //Notes
  notes: String,

}, { timestamps: true});

function getCardModel(Connection) {
  try {
    return Connection.model('Card');
  } catch (e) {
    return Connection.model('Card', CardSchema, 'cards');
  }
}

module.exports = getCardModel;

//Replacing this previous version with what is above.
/*const CardSchema = new mongoose.Schema({
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

module.exports = getCardModel; */

