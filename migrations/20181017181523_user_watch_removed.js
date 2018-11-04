
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_watch_removed', (table) => {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('peeps').onDelete('cascade');
        table.integer('watch_id').references('id').inTable('watch').onDelete('cascade');
        table.string('typeMoved');
        table.string('receivedBy');
        table.json('receivedInReturn');
        table.integer('value');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_watch_removed')  
};
