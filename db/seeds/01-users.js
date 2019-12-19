
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'LambdaSchoolAdmin', password: 'ilovelambda', department: 'Admin'},
        { username: "sage-jordan", password: "pass", department: 'Student' }
      ]);
    });
};
