exports.up = function(knex, Promise) {
  return knex.schema.createTable('contact', function(table){
    table.increments();
    table.string('given_name');
    table.string('family_name');
    table.string('google_id');
    table.string('email');
    table.string('password');
    table.integer('troop_number');
    table.boolean('admin_access');
    table.string('picture');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contact');
};
