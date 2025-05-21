// app.js
const express = require('express');
const cors = require('cors');
const searchRoutes = require('./routes/searchRoutes');
const searchRankingRoutes = require('./routes/locakRankingRoute');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

// Middleware
app.use(express.json());
const allowedOrigins = ['http://localhost:3000','https://seo-serp-frontend.vercel.app']; // Add your production frontend URL later
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS','DELETE','PUT'], // Ensure OPTIONS is included
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Routes
app.use('/api/search', searchRoutes);
app.use('/api/search/phase2', searchRankingRoutes);
app.use('/api', chatRoutes);

module.exports = app;