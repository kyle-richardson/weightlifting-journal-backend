
exports.up = function(knex) {
    return knex.schema.createTable('workouts', tbl => {
        tbl.increments();
        tbl.string('name', 128).unique().notNullable();
        tbl.string('muscle_group', 128).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('workouts');
};