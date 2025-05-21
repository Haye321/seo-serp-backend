const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const searchRoutes = require('./routes/searchRoutes');
const searchRanking = require('./routes/locakRankingRoute');
const chatRoutes = require('./routes/chatRoutes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to database
connectDB().catch(err => {
  console.error('Database connection error:', err);
  process.exit(1);
});

// Routes
app.use('/api/search', searchRoutes);
app.use('/api/search/phase2', searchRanking);
app.use('/api', chatRoutes);

// For local development only
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;