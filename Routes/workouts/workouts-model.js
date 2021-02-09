const db = require('../../db/db-config');

module.exports = {
    findByUserId,
    findById,
    add,
    remove,
    update
}

function add(workout){ // workout => new user workout
    return db('workouts')
        .insert(workout)
        .then(res=>res)
        // .then(ids => {
        //     const [id] = ids;
        //     return findById(id);
        // });
};

function findByUserId(id){ // => user's workouts by user's id
    return db('workouts')
        .select('id', 'user_id', 'workout_name', 'muscle_group', 'weight', 'reps', 'sets', 'date_completed')
        .where('user_id', '=', id)
} 

function findById(id){ // => user's workout by it's id
    return db('workouts')
        .select('id', 'user_id', 'workout_name', 'muscle_group', 'weight', 'reps', 'sets', 'date_completed')
        .first()
        .where({id});
}

function remove(id){
    return db('workouts')
        .where({ id: Number(id) })
        .del()
}

function update(id, changes){
    return db('workouts')
        .where({id})
        .update(changes)
}