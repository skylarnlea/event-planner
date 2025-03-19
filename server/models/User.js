const knex = require('knex')(require('../db/knexfile').development);

exports.createUser = (user) => knex('users').insert(user);
exports.findUserByUsername = (username) => knex('users').where({ username }).first();