const db = require('../../db/db-config');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
    update
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
    return db('workouts')
        .insert(workout)
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
};

function findById(id){ // => workout at id
    return db('workouts')
        .select('id', 'name', 'muscle_group')
        .where({ id })
        .first();
};

function remove(id){ // => workout deleted
    return db('workouts')
        .where({ id: Number(id) })
        .del()
}

function update(changes, id){
    return db('workouts')
        .where({ id })
        .update(changes)
}