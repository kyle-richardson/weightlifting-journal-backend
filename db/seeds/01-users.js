const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
      return knex('users').insert([
        {
          username: 'Admin',
          password: bcrypt.hashSync('ilovelambda', 12),
          department: 'Admin',
          id: 0
        },
        {
          username: 'test-user',
          password: bcrypt.hashSync('test-pass', 12),
          department: "Student",
          id: 1
        }
      ]);
};
