const db = require('../../db/db-config');
const { node_env } = require("../../config"); 

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
    update,
    findByUser
};

function find(){ // => user list
    return db('users')
        .select('id', 'username', 'password', 'department');
};

function findBy(filter){ // => user @ filter
    return db('users')
        .select('id', 'username', 'password', 'department')
        .where(filter);
};

function findByUser(name) {
    const like = node_env ==='production' ? 'ILIKE' : 'LIKE'
    return db('users')
        .select('id', 'username', 'password', 'department')
        .where('username', like,  `%${name}%`)
}

async function add(user){ // => new user
    return await db('users')
        .insert(user)
        // .then(ids => {
        //     const [id] = ids;
        //     return findById(id);
        // });
        .then(res => res)
};

function findById(id){ // => user at id
    return db('users')
        .select('id', 'username', 'department')
        .where({ id })
        .first();
};

function update(changes, id){
    return db('users')
        .where({ id })
        .update( changes )
}

function remove(id){
    return db('users')
        .where({ id: Number(id) })
        .del()
}