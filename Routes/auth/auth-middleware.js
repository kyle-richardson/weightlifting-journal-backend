module.exports = (req, res, next) => {

    if(req.session && req.session.user){

        const {id} = req.params;
        const userId = req.session.user.id;

        if(id.toString() === userId.toString() || req.session.admin){ 
            next();
        } else {
            res.status(401).json({ message: 'Not logged in as Admin!'});
        }
        
    } else {
        res.status(404).json({ message: "Please login"})
    }
};