exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('leaders').del(),

    // Inserts seed entries
    knex('leaders').insert({
      contact_id: '1'
    }),
    knex('leaders').insert({
      contact_id: '2'
    }),
    knex('leaders').insert({
      contact_id: '3'
    })
  )
};
