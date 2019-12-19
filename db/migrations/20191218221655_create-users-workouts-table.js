
exports.up = function(knex) {
    return knex.schema.createTable('users-workouts', tbl => {
        tbl.increments();
        tbl.integer('user_id').unsigned().notNullable()
            .references('id').inTable('users');
        tbl.integer('workout_id').unsigned().notNullable()
            .references('id').inTable('workouts');
        tbl.decimal('weight');
        tbl.integer('reps');
        tbl.integer('sets');
        tbl.date('date_completed');
    })
};

exports.down = function(knex) {
  
};
