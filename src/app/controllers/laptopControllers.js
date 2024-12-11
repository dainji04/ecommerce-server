const laptop = require('../models/laptop');

class laptopControllers {
    // [POST] /laptop/create
    create(req, res) {
        const product = new laptop(req.body);
        try {
            product.save().then((product) => {
                res.status(201).json(product);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }

    // [GET] /laptop
    async getAll(req, res) {
        try {
            await laptop.find({}).then((laptop) => {
                res.json(laptop);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed' });
        }
    }

    // [GET] /laptop/:id
    async getItem(req, res) {
        try {
            await laptop.findById(req.params.id).then((laptop) => {
                res.status(200).json(laptop);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }
}

module.exports = new laptopControllers();
