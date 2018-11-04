
exports.up = function(knex, Promise) {
  return knex.schema.createTable('peeps', (table) => {
      table.increments('id').primary();
      table.string('firstName').notNullable();
      table.string('lastName').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('peeps')
};
