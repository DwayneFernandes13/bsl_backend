let express = require('express');
let router = express.Router();

let loginController = new (require("./login.controller"))();

// Define your routes GET / POST / PUT / DELETE etc.

router.post("/register", loginController.register);
router.post("/", loginController.login);

module.exports = router;