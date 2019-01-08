module.exports = {

  // Local dev environment environment
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/watch_collection_db'
  },

  // hosted on port 8081, env used to test pwa and full (production) build in local env
  testing: {
    client: 'postgresql',
    connection: 'postgres://localhost/watch_collection_db'
  },
  
  // Mirror image of production => push to prod from staging
  staging: {
    client: 'postgresql',
    connection: 'postgres://exjejauadqyquc:29f39a788a465a1487d59dd9672d955dddb1068d18efe00cb44bbba9cb9f803c@ec2-54-235-169-191.compute-1.amazonaws.com:5432/d3148t2bp4gd9n'
},

  // most stable and tested version of staging
  production: {
    client: 'postgresql',
    connection: ''
  } 

};
