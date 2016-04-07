var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

var Contact = function(){
  return knex('contact')
}

var Scouts = function(){
  return knex('scouts')
}

var Troop = function(){
  return knex('troop')
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// get all Scouts with their troop numbers so they can display on leader dashboard
Contact().join('scouts', 'contact.id', 'scouts.contact_id').join('troop', 'contact.troop_number', 'troop.troop_number').then(function(results){
  console.log(results)
});
module.exports = router;
