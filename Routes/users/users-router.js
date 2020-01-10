const router = require('express').Router();
const Users = require('./users-model');
const restricted = require('../auth/auth-middleware');
const bcrypt = require('bcryptjs');

router.use(restricted);

router.get('/', (req, res) => {
    console.log("Fetching users..");
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    console.log(`Getting user with id ${id}`)
    Users.findById(id)
        .then(user => {
            if(user){
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: `Please provide a valid id`})
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;
    const hash = bcrypt.hashSync(changes.password, 12);
    changes.password = hash;

    Users.update(changes, id)
        .then(user => {
            console.log(changes);
            console.log(user)
            if(user){
                Users.findById(id)
                .then(user => {
                    res.status(200).json({ updatedUser: user })
                })
                .catch(err => {
                    res.status(500).json(err);
                })
            } else {
                res.status(500).json({ message: 'please provide a valid id' })
            }
        })
        .catch(err => {
            res.status(500).json({ err: err.message })
        })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    console.log(`Deleting user ${id}`);
    Users.remove(id)
        .then(deleted => {
            res.status(200).json(`User id: ${id} successfully deleted`);
        })
        .catch(err => {
            res.status(500).json({ err: err.message });
        })
})

module.exports = router;