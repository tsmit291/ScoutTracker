var express = require('express');
var router = express.Router();
var env = require('dotenv').load();
var knex = require('../db/knex');
var google = process.env.GOOGLE_SECRET

function Contact(){
  return knex('contact');
};


router.post('/auth/google', function(req,res){
  var accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
  var peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
  var params = {
    code: req.body.code,
    client_id: '911347123367-mk5p5j2g5v6f8svm1ossb068qe1q4828.apps.googleusercontent.com',
    client_secret: google,
    redirect_uri: req.body.redirect_uri,
    grant_type: 'authorization_code'
  };

  // exchange authorization code for access token.
  request.post(accessTokenUrl, {json: true, form: params}, function(err, response, token){

    var accessToken = token.access_token;
    var headers = { Authorization: 'Bearer ' + accessToken};
  // retreive profile information about the current user.
  request.get({ url: peopleApiUrl, headers: headers, json: true}, function(err, response, profile){
    console.log(profile);
    if (profile.error){
      return res.status(500).send({message: profile.error.message});
    }
    // link user accounts.
    if (req.header('Authorization')){
      Contact().select().where({google_id: profile.sub}).first().then(function(result){
        console.log("results in express route");
        console.log(result);
        if (result){
          return res.status(409).send({message: 'There is already a google account that belongs to you'});
        }
        var token = req.header('Authorization').split(' ')[1];
        var payload = jwt.decode(token, config.TOKEN_SECRET);
        Contact().select().where({google_id: payload.sub}).then(function(user){
          if (!user){
            return res.status(400).send({message: 'User Not Found'});
          }
          user.google = profile.sub;
          user.picture = user.picture || profile.picture.replace('sz=50', 'sz=200');
          user.displayName = user.displayName || profile.name;
          user.save(function(){

            res.send({token: user});
          });
        });
      });
    } else {
      // create a new user account or return existing one
      Contact().select().where({google_id: profile.sub}).first().then(function(rest){
        console.log("here is my result")
        console.log(rest)
        if (rest){
          // res.redirect('/#/dashboard')
          return res.send('You are now logged in!');
        }
        var user = {}
        user.google_id = profile.sub;
        user.picture = profile.picture.replace('sz=50', 'sz=200');
        user.given_name = profile.given_name;
        user.family_name = profile.family_name;
        user.email = profile.email;
        // Knex call to create user
      Contact().insert(user).then(function(response){
        res.send('You have created a user baby');
      })
      });
    }
  });
});
});

module.exports = router;
