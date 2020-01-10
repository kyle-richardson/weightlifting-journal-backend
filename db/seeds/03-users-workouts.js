
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        { user_id: 1, workout_name: 'Push Ups', muscle_group: 'Upper body', weight: 0.0, reps: 20, sets: 1 }
      ]);
    });
};
