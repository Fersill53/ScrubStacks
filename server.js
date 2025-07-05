require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connection.on('connected', async () => {
  console.log('✅ Connected to DB:', mongoose.connection.name);
  const collections = await mongoose.connection.db.listCollections().toArray();
  console.log('✅ Collections:', collections);
});


const MONGO_URI = process.env.MONGO_URI;
console.log('MONGO_URI from .env =', MONGO_URI);

async function startServer() {
  if (!MONGO_URI) {
    console.error('❌ MONGO_URI is not defined in .env!');
    process.exit(1);
  }

  try {
    mongoose.set('debug', true);
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected to scrubstack!');

    const app = express();
    app.use(cors());
    app.use(express.json());

    const cardsRouter = require('./server/routes/cards');
    app.use('/api/cards', cardsRouter);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
}

startServer();
