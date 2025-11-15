"use strict";

const db = require('../../../db');
module.exports = class VoucherModel {
    async createPlayer(data){

        // Example: Insert a new player
    let result = await db('players').insert({
        name: data.name,
        age: data.age,
        position: data.position,
        phone: data.phone
  })
  
  return result;

    }
}