
exports.seed = function(knex) {
  today = new Date()
      return knex('workouts').insert([
        { user_id: 1, 
          workout_name: 'Push Ups', 
          muscle_group: 'Upper body', 
          weight: 0.0, 
          reps: 20, 
          sets: 1, 
          date_completed: `${(today.getMonth() + 1)}/${today.getDate()}/${today.getFullYear()}`
      }
      ]);
};
