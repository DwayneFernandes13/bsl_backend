"use strict";
let PlayerModel = new (require('./player.model.js'))();
let PlayerResponse = require("./player.response.js");

module.exports = class PlayerService {

    async createPlayer(_data) {
        try {
            let players = await PlayerModel.createPlayer(_data)
            return PlayerResponse.success("added_success", players);
        } catch (err) {
            console.log(err)
            return PlayerResponse.failed("general_error");
        }
    }
}