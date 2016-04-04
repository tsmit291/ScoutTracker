exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', function(table){
    table.increments();
    table.string('badge_id');
    table.text('step_description');
    table.integer('step_weight');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('steps');
};
