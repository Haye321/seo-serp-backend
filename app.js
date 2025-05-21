// app.js
const express = require('express');
const cors = require('cors');
const searchRoutes = require('./routes/searchRoutes');
const searchRankingRoutes = require('./routes/locakRankingRoute');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/search', searchRoutes);
app.use('/api/search/phase2', searchRankingRoutes);
app.use('/api', chatRoutes);

module.exports = app;
