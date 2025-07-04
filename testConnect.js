require('dotenv').config();
const mongoose = require('mongoose');

console.log('Using MONGO_URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB!');
  return mongoose.connection.db.collection('cards').find().toArray();
})
.then(cards => {
  console.log('✅ Fetched cards:', cards);
  process.exit(0);
})
.catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});
