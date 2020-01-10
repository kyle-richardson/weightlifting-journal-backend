
exports.up = function(knex) {
    return knex.schema.createTable('workouts', tbl => {
        tbl.increments();
        tbl.integer('user_id').unsigned().notNullable()
            .references('id').inTable('users');
        tbl.string('workout_name', 128).notNullable();
        tbl.string('muscle_group', 128);
        tbl.decimal('weight');
        tbl.integer('reps');
        tbl.integer('sets');
        tbl.timestamp('date_completed');
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('workouts');
};
