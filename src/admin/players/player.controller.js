"use strict";
let Validator = require('validatorjs');
let PlayerService = new (require('./player.service'))();
let PlayerValidator = new (require('./player.validator'))();
let PlayerFormatter = new (require('./player.formatter'))();
let PlayerResponse = require("./player.response");

module.exports = class PlayerController {
    async createPlayer(req, res) {
        let returnResponse = {};

        // Format request query / body / param data
        let _data = PlayerFormatter.createPlayer(req);
        console.log("createPlayer data::", _data)

        // Setup validation
        let rules = PlayerValidator.createPlayer();

        // Apply validation rules
        let Validation = new Validator(_data, rules)

        // check validation passes or not
        if (Validation.passes()) {

            // Validation pass

            // Call a service and store return result
            let result = await PlayerService.createPlayer(_data)

            returnResponse = result;
        } else {
            // Validation failed

            // Getting error response message
            returnResponse = PlayerResponse.form_field_required;

            // Getting validation errors
            returnResponse.errors = Validation.errors.errors;

            // Set status 400 Bad Request;
            res.status(400);
        }
        // Send response to client
        res.json(returnResponse);

    }
}