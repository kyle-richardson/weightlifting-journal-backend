const db = require('../../db/db-config');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove
};

function find(){
    return db('users')
        .select('id', 'username', 'password');
};

function findBy(filter){
    return db('users')
        .select('id', 'username', 'password')
        .where(filter);
};

function add(user){
    return db('users')
        .insert(user)
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
};

function findById(id){
    return db('users')
        .select('id', 'username')
        .where({ id })
        .first();
};

function remove(id){
    return db('users')
        .where({ id: Number(id) })
        .del()
}