require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI);

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect first, THEN register routes
mongoose.connect(process.env.MONGO_URI, {
  dbName: 'scrubstack'
})
  .then(() => {
    console.log('✅ MongoDB connected!');

    // Routes only after connection!
    const cardsRouter = require('./server/routes/cards');
    app.use('/api/cards', cardsRouter);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
  });
