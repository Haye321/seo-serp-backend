// app.js
const express = require('express');
const cors = require('cors');
const searchRoutes = require('./routes/searchRoutes');
const searchRankingRoutes = require('./routes/localRankingRoute');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'OPTIONS','DELETE','PUT'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
}));

// Routes
app.use('/api/search', searchRoutes);
app.use('/api/search/phase2', searchRankingRoutes);
app.use('/api', chatRoutes);

module.exports = app;