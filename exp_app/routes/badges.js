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
  }, function(error){
    console.log("woah we have an error");
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
});

// post badge in mytracker table
// router.post('/:id/dashboard/:badge_id/tracker', function(req, res){
//   var myBadges= {
//     contact_id: req.params.id,
//     badge_id: req.params.badge_id,
//     badge_image: req.body.badge_image
//   }
//     myTracker().insert(myBadges).then(function(result){
//       res.json("confirmation received");
//     });
// }, function(error){
//   console.log("you've got an error in your knex call for posting to the my tracker table");
// });

router.post('/:id/dashboard/:badge_id/tracker', function(req, res){
  myTracker().select().where({'contact_id': req.params.id}).where({'badge_id': req.params.badge_id}).then(function(result){
      if (result.length == 0){
        var myBadges= {
          contact_id: req.params.id,
          badge_id: req.params.badge_id,
          badge_image: req.body.badge_image
        }
        myTracker().insert(myBadges).then(function(){
          myTracker().select().where({'contact_id': req.params.id}).then(function(payload){
            console.log("this is payload",payload);
            res.json(payload)
          });
        });
      } else {
        myTracker().select().where({'contact_id': req.params.id}).then(function(resulty){
        res.json(resulty);
        console.log("results are here", resulty);
        })
      }
  })
})


module.exports = router;
