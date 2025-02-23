const express = require('express');
const router = express.Router();

// const {createPlayer} = require('./player.controller');
const playerController = require('./player.controller');
// Use the routes

// router.use('/add', createPlayer);
router.use('/add', playerController.createPlayer);
router.use('/edit', playerController.editPlayer);
router.use('/delete', playerController.deletePlayer);

module.exports = router;
