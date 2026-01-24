"use strict";

const db = require('../../db');
module.exports = class LoginModel {
    async register(data){

        // Example: Insert a new user
        let result = await db('users').insert({
            name: data.name,
            email: data.email,
            password_hash: data.password
        })
        
        return result;

    }
async exists(data) {
    const result = await db('users')
        .where({ email: data.email })
        .first();

    return !!result; // true if exists, false if not
}
async getHashPassword(data) {
    const result = await db('users')
        .where({ email: data.email })
        .first();
    return result ? result : null;
}

    async login(data){

        // Example: Get user by email
        let result = await db('users').where({
            email: data.email
        }).select('*')
        
        return result;

    }
}
