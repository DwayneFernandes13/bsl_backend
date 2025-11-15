"use strict";
module.exports = class PlayerFormatter {
    createPlayer(req) {
        return {
            // ...req.body
            "name": req.body.name,
            "age": req.body.age,
            "position": req.body.position,
            "phone": req.body.phone,
            "location": req.body.location
        }
    }
}