const router = require('express').Router();
const Users = require('./users-model');
const restricted = require('../auth/auth-middleware');
const Workouts = require('../workouts/workouts-model');

router.get('/', restricted, (req, res) => {
    console.log("Fetching users..");
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});

router.get('/:id', restricted, (req, res) => {
    const {id} = req.params;
    console.log(`Getting user with id ${id}`)
    Users.findById(id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.get('/:id/workouts', restricted, (req, res) => {
    const {id} = req.params;

    Workouts.findByUserId(id)
        .then(workouts => {
            if(workouts.length>0){
                res.status(200).json({workouts})
            } else {
                res.status(400).json({ message: `Please add a workout` })
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', restricted, (req, res) => {
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