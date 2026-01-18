const express = require('express');
const router = express.Router();
const loginRoutes = require('../login/login.routes');

// Import the routes
const playerRoutes = require('./players/player.routes');

// Use the routes
router.use('/players', playerRoutes);
router.use('/login', loginRoutes);

module.exports = router;

