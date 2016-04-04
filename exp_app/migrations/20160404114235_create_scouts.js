exports.up = function(knex, Promise) {
  return knex.schema.createTable('scouts', function(table){
    table.increments();
    table.integer('contact_id');
    table.string('scout_level');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scouts');
};
