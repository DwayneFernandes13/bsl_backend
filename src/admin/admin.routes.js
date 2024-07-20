const express = require('express');
const router = express.Router();

// Import the routes
const playerRoutes = require('./players/player.routes');

// Use the routes
app.use('/players', playerRoutes);

module.exports = router;
