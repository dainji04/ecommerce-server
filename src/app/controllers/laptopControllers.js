const laptop = require('../models/laptop');

class laptopControllers {
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
            await laptop.findById(req.params.id).then((phone) => {
                res.status(200).json(phone);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }

    // [POST] /laptop/create
    create(req, res) {
        const product = new laptop(req.body);
        try {
            product.save().then((product) => {
                res.status(201).json({ message: 'successfully', product });
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }
}

module.exports = new laptopControllers();
