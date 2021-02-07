const router = require('express').Router();
const Workouts = require('./workouts-model');


router.get('/:id', (req, res) => { //takes user id => users list of workouts
    const {id} = req.params;
    Workouts.findByUserId(id)
        .then(workouts => {
            res.status(200).json(workouts)
        })
        .catch(err => {
            res.status(500).json(err);
        });
})

router.post('/', (req, res) => { // takes body of workout => newly created workout
    const workout = req.body;

    Workouts.add(workout)
        .then(newWorkout => {
            res.status(200).json(newWorkout)
        })
        .catch(err => {
            res.status(500).json({ err: err.message });
        });
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;
    Workouts.update(id, changes)
        .then(updated => {
            if(updated){
                Workouts.findById(id)
                    .then(updated => {
                        res.status(200).json({ message: 'Successfully updated', updated })
                    })
                    .catch(err => {
                        res.status(500).json({ message: 'Updated but error finding new user', err })
                    })
            } else {
                res.status(400).json({ err: 'error'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: err.message });
        })
})

router.delete('/:id', (req, res) => { // takes workout id => 204 deleted
    const {id} = req.params;
    Workouts.remove(id)
        .then(deleted => {
            res.status(200).json({ message: `Workout at id: ${id} successfully deleted` });
        })
        .catch(err => {
            res.status(500).json({ err: err.message });
        })
})

module.exports = router;