// Update with your config settings.

module.exports = {

  // Local dev environment environment
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/watch_collection_db'
  },
  
  // Mirror image of production => push to prod from staging
  staging: {
    client: 'postgresql',
    connection: 'postgres://localhost/watch_collection_db_test'
  },

  production: {
    client: 'postgresql',
    // connection: 'HEROKU'
  }

};
