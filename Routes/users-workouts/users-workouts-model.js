const db = require('../../db/db-config');

module.exports = {
    findByUserId,
    findByUsersWorkoutsId,
    add,
    remove
}

function add(workout){ // => new user workout
    return db('users-workouts')
        .insert(workout)
        .then(ids => {
            const [id] = ids;
            return findByUsersWorkoutsId(id);
        });
};

function findByUserId(id){ // => user's workouts by user's id
    console.log(id);
    return db('users-workouts')
        .select(
            'uw.id', 'w.name', 'w.muscle_group', 'uw.weight', 'uw.reps', 'uw.sets', 'uw.date_completed'
        )
        .from('users-workouts as uw')
        .leftJoin('workouts as w', 'w.id', 'uw.workout_id')
        .where('uw.user_id', '=', id)
} 

function findByUsersWorkoutsId(id){ // => user's workout by it's id
    return db('users-workouts')
        .select(
            'uw.id', 'w.name', 'w.muscle_group', 'uw.weight', 'uw.reps', 'uw.sets', 'uw.date_completed'
        )
        .from('users-workouts as uw')
        .leftJoin('workouts as w', 'w.id', 'uw.workout_id')
        .where('uw.id', id);
}

function remove(id){
    return db('users-workouts')
        .where({ id: Number(id) })
        .del()
}