
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_watch_favorited', (table) => {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('peeps');
        table.integer('watch_id').references('id').inTable('watch').onDelete('cascade');        
        table.boolean('isCurrentFavorite');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_watch_favorited')
  };
  
