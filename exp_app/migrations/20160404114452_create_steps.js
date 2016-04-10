exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', function(table){
    table.increments();
    table.integer('badge_id');
    table.text('step_description');
    table.text('step_supplies');
    table.integer('step_weight');
    table.boolean('iscomplete');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('steps');
};
