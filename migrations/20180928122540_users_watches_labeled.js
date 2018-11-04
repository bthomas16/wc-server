exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_watch_attributed', (table) => {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('peeps');
        table.integer('watch_id').references('id').inTable('watch').onDelete('cascade');
        table.json('labels');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_watch_attributed')
  };