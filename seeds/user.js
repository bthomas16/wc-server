
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('peeps').del()
    .then(function () {
      const users = 
      [
        {
          firstName: 'Larry',
          lastName: 'Moe',
          userName: 'Curly',
          password: 'ohyeah',
          email: 'lmc@g.com',
          phone: '123456789',
          address: '124 wallaby way,Sidney'
        }
      ];
      return knex('peeps').insert(users);
    });
};