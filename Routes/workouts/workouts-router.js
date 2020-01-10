const router = require('express').Router();
const Workouts = require('./users-workouts-model');

router.use(restricted);

router.get('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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