exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('contact').del(),

    // Inserts seed entries
    knex('contact').insert({
      first_name: 'Taylor',
      last_name: 'Smith',
      email: 'tsmit291@icloud.com',
      password: 'test',
      troop_number: '1510',
      admin_access: 'yes'
    }),
    knex('contact').insert({
      first_name: 'Ann',
      last_name: 'Ellis',
      email: 'ann@gmail.com',
      password: 'test',
      troop_number: '1222',
      admin_access: 'yes'
    }),
    knex('contact').insert({
      first_name: 'Holly',
      last_name: 'French',
      email: 'frenchie_h@icloud.com',
      password: 'test',
      troop_number: '3578',
      admin_access: 'yes'
    }),
    knex('contact').insert({
      first_name: 'Polly',
      last_name: 'Smith',
      email: 'polly@icloud.com',
      password: 'test',
      troop_number: '1510',
      admin_access: 'no'
    }),
    knex('contact').insert({
      first_name: 'Elise',
      last_name: 'Smith',
      email: 'elise@icloud.com',
      password: 'test',
      troop_number: '1222',
      admin_access: 'no'
    }),
    knex('contact').insert({
      first_name: 'Tasha',
      last_name: 'Evans',
      email: 'tasha@icloud.com',
      password: 'test',
      troop_number: '3578',
      admin_access: 'no'
    })
  )
};
