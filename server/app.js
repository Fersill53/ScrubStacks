/*const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });
console.log('MONGO_URI from .env =', process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Routes
const cardRoutes = require('./routes/cards');
app.use('/api/cards', cardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); */

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import cardsRouter from './routes/cards.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  dbName: 'scrubstack'
})
  .then(() => console.log('✅ MongoDB connected to scrubstack!'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// API routes
app.use('/api/cards', cardsRouter);

// Serve React static build
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

