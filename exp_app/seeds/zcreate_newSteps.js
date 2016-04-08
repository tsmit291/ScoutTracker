var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[environment];
var db = require('knex')(config)

exports.seed = function(knex, Promise) {
  return db('badges').select().then(function(badges){
    return Promise.join(
      // Deletes ALL existing entries
      knex('steps').del(),

      // Inserts seed entries
      knex('steps').insert({
        badge_id: badges[0].id,
        step_description: 'Share with a group why you feel it is important to be honest.',
        step_supplies: 'none',
        step_weight: '1'
        })

      )
  });
};
