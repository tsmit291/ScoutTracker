var express = require('express');
var router = express.Router();
var knex = require("../db/knex");
var env = require('dotenv').load();

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
  }, function(error){
    console.log("woah we have an error");
  });
});


router.post('/:id/dashboard/:badge_id/tracker', function(req, res){
  myTracker().select().where({'contact_id': req.params.id, 'badge_id': req.params.badge_id}).then(function(result){
    if (result.length === 0){
      var myBadges= {
        contact_id: req.params.id,
        badge_id: req.params.badge_id,
        badge_image: req.body.badge_image,
        badge_name: req.body.badge_name
      };
      myTracker().insert(myBadges).then(function(){
        res.end();
      });
    }
  });
});

//get badge by id and show on the tracker page
router.get("/:id/dashboard/:badge_id/tracker", function(req, res){
  myTracker().select().where({'contact_id': req.params.id}).then(function(result){
    Steps().select().then(function(rows){
      // console.log(rows, "these are my rows of steps");
        res.json(formatSteps(result,rows));
    });
  })
});


// function
function formatSteps(myTracker, Steps){
  for (var i in myTracker){
    myTracker[i].steps = [];
    for(var j in Steps){
      if (myTracker[i].badge_id == Steps[j].badge_id){
        myTracker[i].steps.push(Steps[j])
      }
    }
  }
  return myTracker;
}




module.exports = router;
