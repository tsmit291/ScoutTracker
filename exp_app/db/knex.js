var environment = process.env.NODE_ENV || 'development';
var google = process.env.GOOGLE_SECRET 
var config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);
