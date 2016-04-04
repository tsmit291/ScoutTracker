exports.up = function(knex, Promise) {
  return knex.schema.createTable('contact', function(table){
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('password');
    table.integer('troop_number');
    table.boolean('admin_access');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contact');
};
