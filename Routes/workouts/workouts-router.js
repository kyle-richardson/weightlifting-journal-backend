const router = require('express').Router();
const Workouts = require('./workouts-model');
const restricted = require('../auth/auth-middleware');


router.use(restricted);

router.get('/:id', (req, res) => { //takes user id => users list of workouts
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
        });
})

router.post('/', (req, res) => { // takes body of workout => newly created workout
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
    Workouts.update(id)
        .then(updated => {
            if(updated){
                res.status(200).json({ message: 'Successfully updated', updated })
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
            res.status(200).json({ message: `User's Workout at id: ${id} successfully deleted` });
        })
        .catch(err => {
            res.status(500).json({ err: err.message });
        })
})

module.exports = router;