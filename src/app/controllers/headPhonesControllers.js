const headPhones = require('../models/headPhones');

class headPhonesControllers {
    // [POST] /headPhones/create
    create(req, res) {
        const product = new headPhones(req.body);
        try {
            product.save().then((product) => {
                res.status(201).json(product);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }

    // [GET] /headPhones
    async getAll(req, res) {
        try {
            await headPhones.find({}).then((headPhones) => {
                res.json(headPhones);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed' });
        }
    }

    // [GET] /headPhones/:id
    async getItem(req, res) {
        try {
            await headPhones.findById(req.params.id).then((headphone) => {
                res.status(200).json(headphone);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }
}

module.exports = new headPhonesControllers();
