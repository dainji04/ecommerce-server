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
        user.findOne({ emailLogin: req.params.email })
            .then((user) => {
                res.status(200).json({
                    data: user,
                });
            })
            .catch(next);
    }

    update(req, res, next) {
        console.log(req.body);
        user.findOneAndUpdate({ emailLogin: req.params.email }, req.body)
            .then(() => {
                res.status(200).json({
                    message: 'Update user successfully!!!',
                });
            })
            .catch(next);
    }
}

module.exports = new userControllers();
