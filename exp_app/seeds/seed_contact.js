exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('contact').del(),

    // Inserts seed entries
    knex('contact').insert({
      given_name: 'Taylor',
      family_name: 'Smith',
      google_id: 'null',
      email: 'tsmit291@icloud.com',
      password: 'test',
      troop_number: '1510',
      admin_access: true,
      picture: 'http://www.girlscoutsla.org/images/other/Product_Sales/JuniorGSHoldingCan.jpg'
    }),
    knex('contact').insert({
      given_name: 'Ann',
      family_name: 'Ellis',
      google_id: 'null',
      email: 'ann@gmail.com',
      password: 'test',
      troop_number: '1222',
      admin_access: true,
      picture: 'http://www.girlscoutsla.org/images/other/Product_Sales/JuniorGSHoldingCan.jpg'
    }),
    knex('contact').insert({
      given_name: 'Holly',
      family_name: 'French',
      google_id: 'null',
      email: 'frenchie_h@icloud.com',
      password: 'test',
      troop_number: '3578',
      admin_access: true,
      picture: 'http://www.girlscoutsla.org/images/other/Product_Sales/JuniorGSHoldingCan.jpg'
    }),
    knex('contact').insert({
      given_name: 'Polly',
      family_name: 'Smith',
      google_id: 'null',
      email: 'polly@icloud.com',
      password: 'test',
      troop_number: '1510',
      admin_access: false,
      picture: 'http://www.girlscoutsla.org/images/other/Product_Sales/JuniorGSHoldingCan.jpg'
    }),
    knex('contact').insert({
      given_name: 'Elise',
      family_name: 'Smith',
      google_id: 'null',
      email: 'elise@icloud.com',
      password: 'test',
      troop_number: '1222',
      admin_access: false,
      picture: 'http://www.girlscoutsla.org/images/other/Product_Sales/JuniorGSHoldingCan.jpg'
    }),
    knex('contact').insert({
      given_name: 'Tasha',
      family_name: 'Evans',
      google_id: 'null',
      email: 'tasha@icloud.com',
      password: 'test',
      troop_number: '3578',
      admin_access: false,
      picture: 'http://www.girlscoutsla.org/images/other/Product_Sales/JuniorGSHoldingCan.jpg'
    })
  )
};
