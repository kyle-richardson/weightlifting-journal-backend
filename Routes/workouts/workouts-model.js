const db = require('../../db/db-config');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
    findByUserId
};

function find(){ // => workouts list
    return db('workouts')
        .select('id', 'name', 'muscle_group');
};

function findBy(filter){ // => workout @ filter
    return db('workouts')
        .select('id', 'name', 'muscle_group')
        .where(filter);
};

function add(workout){ // => new workout
    return db('users-workouts')
        .insert(workout)
        .then(ids => {
            const [id] = ids;
            console.log(id);
            console.log(findByUsersWorkoutsId(id))
            return findByUsersWorkoutsId(id);
        });
};

function findById(id){ // => workout at id
    return db('workouts')
        .select('id', 'name', 'muscle_group')
        .where({ id })
        .first();
};

function remove(id){
    return db('workouts')
        .where({ id: Number(id) })
        .del()
}

function findByUserId(id){
    console.log(id);
    return db('users-workouts')
        .select(
            'w.name', 'w.muscle_group', 'uw.weight', 'uw.reps', 'uw.sets', 'uw.date_completed'
        )
        .from('users-workouts as uw')
        .leftJoin('workouts as w', 'w.id', 'uw.workout_id')
        .where('uw.user_id', '=', id)
} 

function findByUsersWorkoutsId(id){
    return db('users-workouts')
    .select(
        'w.name', 'w.muscle_group', 'uw.weight', 'uw.reps', 'uw.sets', 'uw.date_completed'
    )
    .from('users-workouts as uw')
    .leftJoin('workouts as w', 'w.id', 'uw.workout_id')
    .where('uw.id', id);
}