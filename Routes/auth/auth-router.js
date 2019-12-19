const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model');

router.post('/register', (req, res) => { //done 
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(200).json({saved})
        })
        .catch(err => {
            res.status(500).json({err});
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    console.log("Username, password: ", username, password);

    Users.findBy({ username })
        .first()
        .then(user => {
            console.log("User: ", user);
            if(user && bcrypt.compareSync(password, user.password)){
                if(user.department === 'Admin'){
                    req.session.admin = user;
                    res.status(200).json({ message: `Welcome ${user.username}!`, session: req.session });
                } else {
                    req.session.user = user;
                    res.status(200).json({ message: `Welcome ${user.username}!`, session: req.session });
                }
            } else {
                res.status(401).json({ message: `Invalid Cridentials` });
            }
        })
        .catch(err => {
            res.status(500).json({ err: err.message })
        })
})

module.exports = router;