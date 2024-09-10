const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const equipmentRoutes = require('./routes/equipmentRoutes');
const dotenv = require("dotenv")
dotenv.config()
const app = express();

// Middleware to parse JSON
app.use(express.json());

// CORS
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Routes
app.use('/api/equipment', equipmentRoutes);

// Database
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB !');
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(err => console.error('Could not connect to MongoDB', err));
