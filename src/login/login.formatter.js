"use strict";
module.exports = class LoginFormatter {
    register(req) {
        return {
            // ...req.body
            "name": req.body.name,
            "email": req.body.email,
            "password": req.body.password
        }
    }

    login(req) {
        return {
            "email": req.body.email,
            "password": req.body.password
        }
    }
}
