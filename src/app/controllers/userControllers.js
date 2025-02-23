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

    getCart(req, res, next) {
        user.findOne({ emailLogin: req.params.email })
            .then((user) => {
                res.status(200).json(user.cart);
            })
            .catch(next);
    }

    async addToCart(req, res, next) {
        const findProduct = await user.findOne({
            emailLogin: req.params.email,
            cart: {
                $elemMatch: { productId: req.body.productId },
            },
        });

        if (findProduct) {
            await user.findOneAndUpdate(
                {
                    emailLogin: req.params.email,
                    'cart.productId': req.body.productId,
                },
                { $inc: { 'cart.$.quantity': 1 } }
            );
            return res.status(200).json({
                message: 'Product quantity increased in cart successfully!!!',
            });
        }

        user.findOneAndUpdate(
            { emailLogin: req.params.email },
            { $push: { cart: req.body } }
        )
            .then(() => {
                res.status(200).json({
                    message: 'Add to cart successfully!!!',
                });
            })
            .catch(next);
    }

    async deleteItemInWishList(req, res, next) {
        try {
            await user.findOneAndUpdate(
                { emailLogin: req.params.email },
                { $pull: { wishlist: { _id: req.params.id } } } // Xoá theo _id
            );
            res.status(200).json({
                message: 'Delete item in wishlist successfully!!!',
            });
        } catch (error) {
            res.status(500).json({
                message: 'Failed to delete item in wishlist',
                error,
            });
        }
    }

    async deleteItemInCart(req, res, next) {
        try {
            await user.findOneAndUpdate(
                { emailLogin: req.params.email },
                { $pull: { cart: { _id: req.params.id } } } // Xoá theo _id
            );
            res.status(200).json({
                message: 'Delete item in cart successfully!!!',
            });
        } catch (error) {
            res.status(500).json({
                message: 'Failed to delete item in wishlist',
                error,
            });
        }
    }
}

module.exports = new userControllers();
