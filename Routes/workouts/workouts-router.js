const router = require('express').Router();
const Workouts = require('./workouts-model');
const restricted = require('../auth/auth-middleware');

router.get('/', (req, res) => {
    console.log("Fetching workouts..");
    Workouts.find()
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    console.log(`Getting user with id ${id}`)
    Workouts.findById(id)
        .then(user => {
            res.status(200).json(user)
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
    Workouts.remove(id)
        .then(deleted => {
            res.status(200).json(`Workout id: ${id} successfully deleted`);
        })
        .catch(err => {
            res.status(500).json({ err: err.message });
        })
})

module.exports = router;