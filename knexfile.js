module.exports = {

  // Local dev environment environment
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/watch_collection_db'
  },
  
  // Mirror image of production => push to prod from staging
  staging: {
    client: 'postgresql',
    connection: 'postgres://fxssqlqhqwpwwh:f734dc7ac065d88151487c6d5888f45ff06ce92056372b610b4c1d7bae793f51@ec2-23-21-201-12.compute-1.amazonaws.com:5432/dfdh5tvclv74i'
  },

  production: {
    client: 'postgresql',
    // connection: 'HEROKU'
  }

};
