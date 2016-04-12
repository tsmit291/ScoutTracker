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
        badge_image: req.body.badge_image
      };
      myTracker().insert(myBadges).then(function(){
        res.end();
      });
    }
  })
})

//get badge by id and show on the tracker page
router.get("/:id/dashboard/:badge_id/tracker", function(req, res){
  myTracker().select().where({'contact_id': req.params.id}).then(function(result){
    Steps().select().where({'badge_id': req.params.badge_id}).then(function(rows){
        res.json(formatSteps(result,rows));
    });
  })
});

// function
function formatBadge(myTracker, Badges){
  console.log("this is my tracker", myTracker);
  console.log("these are my steps", Badges);
  for (var i in myTracker){
    myTracker[i].badges = [];
    for(var j in Badges){
      if (myTracker[i].badge_id == Badges[j].id){
        myTracker[i].badges.push(Badges[j])
      }
    }
  }
  return myTracker;
}




// function
function formatSteps(myTracker, Steps){
  console.log('this is my tracker', myTracker);
  console.log('these are my steps', Steps);
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
