
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('steps').del(),

    // Inserts seed entries
    knex('steps').insert({
      badge_id: '1',
      step_description: 'Share with a group why you feel it is important to be honest.',
      step_weight: '1'
    }),
    knex('steps').insert({
      badge_id: '1',
      step_description: 'Read the story of The Boy Who Cried Wolf. Discuss the boy. Was he honest? How could he have done things differently?',
      step_weight: '3'
    }),
    knex('steps').insert({
      badge_id: '1',
      step_description: 'Share with a group what you think being fair means. Can you describe a time where you felt that something was not fair? How did you react?',
      step_weight: '2'
    }),
    knex('steps').insert({
      badge_id: '1',
      step_description: 'Take the time to complete the I Share! Daisy coloring page. Can you describe what you see in the picture?',
      step_weight: '1'
    }),
  );
};
