exports.up = function(knex, Promise) {
  return knex.schema.createTable('mytracker', function(table){
    table.increments();
    table.integer('contact_id');
    table.integer('badge_id');
    table.string('badge_image');
    table.string('badge_name');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.boolean('backlog_status');
    table.boolean('current_status');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mytracker');
};
