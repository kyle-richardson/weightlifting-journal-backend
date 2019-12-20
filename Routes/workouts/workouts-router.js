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

router.post('/', (req, res) => {
    const workout = req.body;

    Workouts.add(workout)
        .then(newWorkout => {
            res.status(200).json({ newWorkout: newWorkout })
        })
        .catch(err => {
            res.status(500).json({ err: err.message });
        });
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    Workouts.update(changes, id)
        .then(workout => {
            console.log(changes);
            console.log(workout)
            if(workout){
                Workouts.findById(id)
                .then(workout => {
                    res.status(200).json({ updatedWorkout: workout })
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
    Workouts.remove(id)
        .then(deleted => {
            res.status(200).json(`Workout id: ${id} successfully deleted`);
        })
        .catch(err => {
            res.status(500).json({ err: err.message });
        })
})

module.exports = router;