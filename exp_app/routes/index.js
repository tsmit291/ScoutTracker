var express = require('express');
var router = express.Router();
var request = require('request');
// var unirest = require('unirest');
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/auth/google', function(req,res){
  var accessTokenUrl = j
})

module.exports = router;
