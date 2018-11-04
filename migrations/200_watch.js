
exports.up = function(knex, Promise) {
    return knex.schema.createTable('watch', (table) => {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('peeps');
        table.integer('order');
        table.integer('condition');
        

        table.string('src');
        table.string('name').notNullable();
        table.string('sizeWidth');
        table.string('sizeHeight');
        table.string('sizeLugToLug');
        table.string('movementType');
        table.string('brand');
        table.string('ref');
        table.string('model');
        table.string('accuracy');
        table.string('crystal');
        table.string('movement');
        table.string('band');
        table.string('dateAcquired');
        table.string('watchStyle');

        table.boolean('isFullKit');
        table.boolean('isForSale');
        table.boolean('isForTrade');

        table.integer('acquiredFor');
        table.integer('forSalePrice');
        table.integer('forTradeValue');
        table.integer('marketValue');
        
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('watch')
  };