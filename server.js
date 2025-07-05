require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

async function startServer() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'scrubstack'
    });
    console.log('✅ MongoDB connected!');

    // Now import routes
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
