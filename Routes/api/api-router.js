const router = require('express').Router();

const authRouter = require('../auth/auth-router');
const userRouter = require('../users/users-router');
const workoutsRouter = require('../workouts/workouts-router');


router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/workouts', workoutsRouter);

router.get('/', (req, res) => {
    res.json({ api: "It's alive" });
});

module.exports = router;