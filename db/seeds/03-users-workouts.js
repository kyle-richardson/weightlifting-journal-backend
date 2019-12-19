
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users-workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('users-workouts').insert([
        { user_id: 1, workout_id: 1, reps: 20 }
      ]);
    });
};
