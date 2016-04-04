exports.up = function(knex, Promise) {
  return knex.schema.createTable('leaders', function(table){
    table.increments();
    table.integer('contact_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('leaders');
};
