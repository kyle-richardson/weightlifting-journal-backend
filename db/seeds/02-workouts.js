
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        { name: 'Push Ups', muscle_group: 'Pectorals, Deltoids, Triceps, Abdominals, Serratus Anterior' }
      ]);
    });
};
