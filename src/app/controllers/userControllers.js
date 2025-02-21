const user = require('../models/user');

class userControllers {
    create(req, res, next) {
        const newUser = new user(req.body);
        newUser
            .save()
            .then(() => {
                res.status(201).json({
                    message: 'Create user successfully!!!',
                });
            })
            .catch(next);
    }

    getInfo(req, res, next) {
        user.find()
            .then((users) => {
                res.status(200).json({
                    data: users,
                });
            })
            .catch(next);
    }
}

module.exports = new userControllers();
