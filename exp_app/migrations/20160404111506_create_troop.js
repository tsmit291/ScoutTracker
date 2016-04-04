exports.up = function(knex, Promise) {
  return knex.schema.createTable('troop', function(table){
    table.increments();
    table.integer('troop_number');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('troop');
};
