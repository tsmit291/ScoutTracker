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

var myTracker = function(){
  return knex('mytracker')
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
    Badges().select().where({'id': req.params.badge_id}).then(function(result){
      Steps().select().where({'badge_id': req.params.badge_id}).then(function(rows){
        res.json({result: result, rows: rows});
      });
    });
});

router.get("/:id/dashboard/tracker", function(req, res){
  myTracker().select().then(function(result){
    res.json({result: result})
  })
})

// router.get('/restaurants/:restid/employees/:empid/edit', function(req, res, next) {
//   knex('restaurants').where("id", req.params.restid).select().then(function(result) {
//     knex('employees').where("id", req.params.empid).select().then(function(result2) {
//       res.render('employees/edit', {restaurant: result[0], employee: result2[0]});
//     });
//   });
// });

// post badge in mytracker table
router.post('/:id/dashboard/:badge_id/tracker', function(req, res){
  myTracker.select().where({'badge_id': req.params.badge_id}).then(function(result){
    console.log(result);
    if (badge_id == undefined) {
    }
  var myBadges= {
    badge_id: req.body.id,
    badge_image: req.body.badge_image
  }
  myTracker().insert(myBadges).then(function(result){
    res.json("confirmation received");
  });
})
});

router.post('/:id/dashboard/:badge_id/tracker/update', function(req, res){
  var myBadges= {
    badge_id: req.body.id,
    badge_image: req.body.badge_image
  }
  myTracker().where({'badge_id': req.params.badge_id}).update().then(function(result){
    res.json("we've updated our database. confirmation received.");
  });
});



module.exports = router;
