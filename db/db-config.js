const knex = require('knex');

const config = require('../knexfile');

const environment = provess.env.DB_ENV || 'development';

module.exports = knex(config[environment]);