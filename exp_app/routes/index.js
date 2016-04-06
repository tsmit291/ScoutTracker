var express = require('express');
var router = express.Router();
var request = require('request');
// var unirest = require('unirest');
var knex = require('../db/knex');
var google = process.env.GOOGLE_SECRET

function Contact(){
  return knex('contact');
};
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth/google', function(req,res){
  var accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
  var peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
  console.log('code is equal to', req.query);
  var params = {
    code: req.query.code,
    client_id: '911347123367-mk5p5j2g5v6f8svm1ossb068qe1q4828.apps.googleusercontent.com',
    client_secret: google,
    redirect_uri: 'http://localhost:3000/auth/google',
    grant_type: 'authorization_code'
  };

  // exchange authorization code for access token.
  request.post(accessTokenUrl, {json: true, form: params}, function(err, response, token){
    var accessToken = token.access_token;
    console.log('token=' , token);
    var headers = { Authorization: 'Bearer ' + accessToken};
    console.log('headers are here', headers)
  // retreive profile information about the current user.
  request.get({ url: peopleApiUrl, headers: headers, json: true}, function(err, response, profile){
    console.log('This is teh Profile');
    console.log(profile);
    if (profile.error){
      return res.status(500).send({message: profile.error.message});
    }
    // link user accounts.
    if (req.header('Authorization')){
      console.log('this is  the profile ********')
      console.log(profile);
      console.log('*********');
      Contact().select().where({google_id: profile.sub}, function(err, existingUser){
        if (existingUser){
          return res.status(409).send({message: 'There is already a google account that belongs to you'});
        }
        var token = req.header('Authorization').split(' ')[1];
        var payload = jwt.decode(token, config.TOKEN_SECRET);
        console.log('Payload ****');
        console.log(payload.sub);
        console.log('******');
        Contact().find(payload.sub, function(err, user){
          if (!user){
            return res.status(400).send({message: 'User Not Found'});
          }
          user.google = profile.sub;
          user.picture = user.picture || profile.picture.replace('sz=50', 'sz=200');
          user.displayName = user.displayName || profile.name;
          user.save(function(){
            var token = createJWT(user);
            res.send({token: token});
          });
        });
      });
    } else {
      // create a new user account or return existing one
      Contact().find({google: profile.sub}, function(err, existingUser){
        if (existingUser){
          return res.send({token: createJWT(existingUser)});
        }
        var user = new User();
        user.google = profile.sub;
        user.picture = profile.picture.replace('sz=50', 'sz=200');
        user.displayName = profile.name;
        user.save(function(err){
          var token = createJWT(user);
          res.send({token: token});
        });
      });
    }
  });
});
});

module.exports = router;
