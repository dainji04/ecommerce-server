const tablet = require('../models/tablet');

class tabletControllers {
    // [GET] /tablet
    async getAll(req, res) {
        try {
            await tablet.find({}).then((tablet) => {
                res.json(tablet);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed' });
        }
    }

    // [GET] /tablet/:id
    async getItem(req, res) {
        try {
            await tablet.findById(req.params.id).then((phone) => {
                res.status(200).json(phone);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }

    // [POST] /tablet/create
    create(req, res) {
        const product = new tablet(req.body);
        try {
            product.save().then((product) => {
                res.status(201).json({ message: 'successfully', product });
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }
}

module.exports = new tabletControllers();