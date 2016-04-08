var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

var Badges = function(){
  return knex('badges')
}

var Steps = function(){
  return knex('steps')
}

// get all badges
router.get("/badges", function(req,res){
   Badges().select().then(function(payload){
     res.json(payload);
   });
});

// get badge by id and all of its steps
router.get("/badges/:id", function(req,res){
  Badges().where('id', req.params.id).first().then(function(result){
    Steps().where({'badge_id': req.params.id}).then(function(rows){
      allRows = rows;
      console.log(rows);
      res.json({result: result, allRows: allRows});
    });
  });
});





module.exports = router;
