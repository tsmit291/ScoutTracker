exports.up = function(knex, Promise) {
  return knex.schema.createTable('badges', function(table){
    table.increments();
    table.string('badge_name');
    table.string('scout_level');
    table.string('badge_image');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('badges');
};
