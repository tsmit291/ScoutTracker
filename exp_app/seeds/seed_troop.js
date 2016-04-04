exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('troop').del(),

    // Inserts seed entries
    knex('troop').insert({
      troop_number: '1510'
    }),
    knex('troop').insert({
      troop_number: '1222'
    }),
    knex('troop').insert({
      troop_number: '3578'
    })
  )
};
