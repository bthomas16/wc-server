const bcrypt = require('bcryptjs');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('peeps').del()
    .then(function () {

    let user = {
        id: 987654321,
        firstName: 'Larry',
        lastName: 'Moe',
        email: 'we@g.com',
        password: '$2a$10$MP2wN492mmOKn7AJWaarueDipBgWMjluiQeqC3NN6ymZ1Wr.oAhUu'
      }
    
    return knex('peeps').insert(user);
  });
};