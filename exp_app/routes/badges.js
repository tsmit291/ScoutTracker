var express = require('express');
var router = express.Router();
var knex = require("../db/knex");

var Badges = function(){
  return knex('badges')
}

var Steps = function(){
  return knex('steps')
}

var Contact = function(){
  return knex('contact')
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
      res.json({result: result, rows: rows});
    });
  });
});

//get badge by id and show on the tracker page
router.get("/:id/dashboard/:badge_id/tracker", function(req, res){
    Badges().select().where({'id': req.params.badge_id}).then(function(rows){
      Steps().where({'badge_id': req.params.id}).then(function(rows){
        res.json({result: result, rows: rows});
      });
    });
});

//post badge added to tracker page in mytracker table
// router.post('/:id/dashboard/tracker', function(req, res, next){
//   var newBadge = {
//     name: req.body.name,
//     city: req.body.city,
//     state: req.body.state,
//     cuisine: req.body.cuisine,
//     rating: req.body.rating,
//     bio: req.body.textdescription,
//     image: req.body.imageUrl
//   };
//   restaurantinfo().insert(restaurantNew).then(function(result){
//     res.redirect('/restaurants');
//   });
// });



module.exports = router;
