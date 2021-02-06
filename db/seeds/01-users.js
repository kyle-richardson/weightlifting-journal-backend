const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'Admin',
          password: bcrypt.hashSync('ilovelambda', 12),
          department: 'Admin'
        },
        {
          username: 'test-user',
          password: bcrypt.hashSync('test-pass', 12),
          department: "Student"
        }
      ]);
    });
};
