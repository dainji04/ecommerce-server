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

    getWishList(req, res, next) {
        user.findOne({ emailLogin: req.params.email })
            .then((user) => {
                res.status(200).json(user.wishlist);
            })
            .catch(next);
    }

    async addToWishList(req, res, next) {
        const findProduct = await user.findOne({
            emailLogin: req.params.email,
            wishlist: {
                $elemMatch: { productId: req.body.productId },
            },
        });

        if (findProduct) {
            return res.status(400).json({
                message: 'Product already exists in wishlist!!!',
            });
        }

        user.findOneAndUpdate(
            { emailLogin: req.params.email },
            { $push: { wishlist: req.body } }
        )
            .then(() => {
                res.status(200).json({
                    message: 'Add to wishlist successfully!!!',
                });
            })
            .catch(next);
    }
}

module.exports = new userControllers();
