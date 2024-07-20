const knex = require('knex');
const knexfile = require('./config/knex');

const db = knex(knexfile.development);

module.exports = db;
