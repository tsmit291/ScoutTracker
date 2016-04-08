var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

var Badges = function(){
  return knex('badges')
}

// get all badges
router.get("/badges", function(req,res){
   Badges().select().then(function(payload){
     res.json(payload);
   });
});

// get badge by id
router.get("/badges/:id", function(req,res){
  Badges().where('id', req.params.id).first().then(function(result){
    console.log(result);
    res.json(result);
  });
});

module.exports = router;
