const db = require('../../db/db-config');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove
};

function find(){ // => user list
    return db('workouts')
        .select('id', 'name', 'muscle_group');
};

function findBy(filter){ // => user @ filter
    return db('workouts')
        .select('id', 'name', 'muscle_group')
        .where(filter);
};

function add(user){ // => new user
    return db('workouts')
        .insert(user)
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
};

function findById(id){ // => user at id
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