exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('badges').del(),

    // Inserts seed entries
    knex('badges').insert({
      badge_name: 'light blue Petal Patch',
      scout_level: 'daisies'
    }),
    knex('badges').insert({
      badge_name: 'yellow Petal Patch',
      scout_level: 'daisies'
    }),
    knex('badges').insert({
      badge_name: 'green Petal Patch',
      scout_level: 'daisies'
    }),
    knex('badges').insert({
      badge_name: 'red Petal Patch',
      scout_level: 'daisies'
    }),
    knex('badges').insert({
      badge_name: 'orange Petal Patch',
      scout_level: 'daisies'
    }),
    knex('badges').insert({
      badge_name: 'Computer Expert',
      scout_level: 'brownie'
    }),
    knex('badges').insert({
      badge_name: 'My Best Self',
      scout_level: 'brownie'
    }),
    knex('badges').insert({
      badge_name: 'Dancer',
      scout_level: 'brownie'
    }),
    knex('badges').insert({
      badge_name: 'Home Scientist',
      scout_level: 'brownie'
    }),
    knex('badges').insert({
      badge_name: 'My Family',
      scout_level: 'brownie'
    }),
    knex('badges').insert({
      badge_name: 'Camper',
      scout_level: 'junior'
    }),
    knex('badges').insert({
      badge_name: 'Independence',
      scout_level: 'junior'
    }),
    knex('badges').insert({
      badge_name: 'Staying Fit',
      scout_level: 'junior'
    }),
    knex('badges').insert({
      badge_name: 'Financial Literacy',
      scout_level: 'junior'
    }),
    knex('badges').insert({
      badge_name: 'Local Government',
      scout_level: 'junior'
    }),
    knex('badges').insert({
      badge_name: 'Leader in Action',
      scout_level: 'cadette'
    }),
    knex('badges').insert({
      badge_name: 'First Aid',
      scout_level: 'cadette'
    }),
    knex('badges').insert({
      badge_name: 'Public Speaker',
      scout_level: 'cadette'
    }),
    knex('badges').insert({
      badge_name: 'Entrepreneur',
      scout_level: 'cadette'
    }),
    knex('badges').insert({
      badge_name: 'Animal Helpers',
      scout_level: 'cadette'
    }),
    knex('badges').insert({
      badge_name: 'Website Designer',
      scout_level: 'senior'
    }),
    knex('badges').insert({
      badge_name: 'Traveler',
      scout_level: 'senior'
    }),
    knex('badges').insert({
      badge_name: 'Womens Health',
      scout_level: 'senior'
    }),
    knex('badges').insert({
      badge_name: 'Adventure',
      scout_level: 'senior'
    }),
    knex('badges').insert({
      badge_name: 'Gaming',
      scout_level: 'senior'
    }),
    knex('badges').insert({
      badge_name: 'Public Policy',
      scout_level: 'ambassador'
    }),
    knex('badges').insert({
      badge_name: 'Coaching',
      scout_level: 'ambassador'
    }),
    knex('badges').insert({
      badge_name: 'Ambassador',
      scout_level: 'ambassador'
    }),
    knex('badges').insert({
      badge_name: 'Outdoors',
      scout_level: 'ambassador'
    })
  )
};
