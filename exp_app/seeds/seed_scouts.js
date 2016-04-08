exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('scouts').del(),

    // Inserts seed entries
    knex('scouts').insert({
      contact_id: 4,
      scout_level: 'brownie'
    }),
    knex('scouts').insert({
      contact_id: 5,
      scout_level: 'junior'
    }),
    knex('scouts').insert({
      contact_id: 6,
      scout_level: 'daisies'
    }),
    knex('scouts').insert({
      contact_id: 7,
      scout_level: 'ambassador'
    }),
    knex('scouts').insert({
      contact_id: 8,
      scout_level: 'senior'
    }),
    knex('scouts').insert({
      contact_id: 9,
      scout_level: 'cadette'
    })
  )
};
