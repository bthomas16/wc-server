module.exports = {

  // Local dev environment environment
  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/watch_collection_db'
  },
  
  // Mirror image of production => push to prod from staging
  staging: {
    client: 'postgresql',
    connection: 'postgres://sonduksfvgscvq:cd550caa92873a72ad096e39272df99ff0ea59f1632229fc36f780ece6b601e1@ec2-54-235-193-0.compute-1.amazonaws.com:5432/dc4i1q8tqsens6'
},

  // most stable and tested version of staging
  production: {
    client: 'postgresql',
    connection: 'postgres://sonduksfvgscvq:cd550caa92873a72ad096e39272df99ff0ea59f1632229fc36f780ece6b601e1@ec2-54-235-193-0.compute-1.amazonaws.com:5432/dc4i1q8tqsens6'
  } 

};
