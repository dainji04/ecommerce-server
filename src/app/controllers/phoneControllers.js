const phones = require('../models/phones');

class phoneControllers {
    // [POST] /phones/create
    create(req, res) {
        const product = new phones(req.body);
        try {
            product.save().then((product) => {
                res.status(201).json(product);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }

    // [GET] /phones
    async getAll(req, res) {
        try {
            await phones.find({}).then((phones) => {
                res.json(phones);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed' });
        }
    }

    // [GET] /phones/:id
    async getItem(req, res) {
        try {
            await phones.findById(req.params.id).then((phone) => {
                res.status(200).json(phone);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }
}

module.exports = new phoneControllers();
