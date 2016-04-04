exports.up = function(knex, Promise) {
  return knex.schema.createTable('badges', function(table){
    table.increments();
    table.string('badge_name');
    table.string('scout_level');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('badges');
};
