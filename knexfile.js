module.exports = {

  // Local dev environment environment
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/watch_collection_db'
  },
  
  // Mirror image of production => push to prod from staging
  staging: {
    client: 'postgresql',
    connection: 'postgres://fvzkyjrmlckkgo:da71c84cdff561d14cee7fa1b27734a9db40e60d9b89beb39c10dc38efa8f448@ec2-54-204-40-248.compute-1.amazonaws.com:5432/dcepvme13in9n'
},

  // most stable and tested version of staging
  production: {
    client: 'postgresql',
    connection: ''
  } 

};
