const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const searchRoutes = require('./routes/searchRoutes');
const searchRanking = require('./routes/locakRankingRoute');
const chatRoutes = require('./routes/chatRoutes'); // Import chat routes

require("dotenv").config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/search', searchRoutes);
app.use('/api/search/phase2', searchRanking);
app.use('/api', chatRoutes); // Add chat routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));