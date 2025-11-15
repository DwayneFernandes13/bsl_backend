let express = require('express');
let router = express.Router();

let playerController = new (require("./player.controller"))();

// Define your routes GET / POST / PUT / DELETE etc.

router.post("/add", playerController.createPlayer);

module.exports = router;