"use strict";
let Validator = require('validatorjs');
let LoginService = new (require('./login.service'))();
let LoginValidator = new (require('./login.validator'))();
let LoginFormatter = new (require('./login.formatter'))();
let LoginResponse = require("./login.response");

module.exports = class LoginController {
    async register(req, res) {
        let returnResponse = {};

        // Format request query / body / param data
        let _data = LoginFormatter.register(req);
        console.log("register data::", _data)

        // Setup validation
        let rules = LoginValidator.register();

        // Apply validation rules
        let Validation = new Validator(_data, rules)

        // check validation passes or not
        if (Validation.passes()) {

            // Validation pass

            // Call a service and store return result
            let result = await LoginService.register(_data)

            returnResponse = result;
        } else {
            // Validation failed

            // Getting error response message
            returnResponse = LoginResponse.form_field_required;

            // Getting validation errors
            returnResponse.errors = Validation.errors.errors;

            // Set status 400 Bad Request;
            res.status(400);
        }
        // Send response to client
        //   req.session.user = {
        //     id: user.id,
        //     email: user.email,
        //     role: user.role,
        // };
        res.json(returnResponse);

    }

    async login(req, res) {
        let returnResponse = {};

        // Format request query / body / param data
        let _data = LoginFormatter.login(req);
        console.log("login data::", _data)

        // Setup validation
        let rules = LoginValidator.login();

        // Apply validation rules
        let Validation = new Validator(_data, rules)

        // check validation passes or not
        if (Validation.passes()) {

            // Validation pass

            // Call a service and store return result
            let result = await LoginService.login(_data)

            returnResponse = result;
        } else {
            // Validation failed

            // Getting error response message
            returnResponse = LoginResponse.form_field_required;

            // Getting validation errors
            returnResponse.errors = Validation.errors.errors;

            // Set status 400 Bad Request;
            res.status(400);
        }
        // Send response to client
        res.json(returnResponse);

    }
}
