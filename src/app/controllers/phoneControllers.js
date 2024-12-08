const bestSell = require('../models/phones');

class phoneControllers {
    // [GET] /phones
    async getAll(req, res) {
        try {
            await bestSell.find({}).then((bestSell) => {
                res.json({ success: true, bestSell });
            });
        } catch (err) {
            res.status(500).json({ message: 'failed' });
        }
    }

    // [GET] /phones/:id
    async getItem(req, res) {
        try {
            await bestSell.findById(req.params.id).then((item) => {
                res.status(200).json(item);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }

    // [POST] /phones/create
    create(req, res) {
        const product = new bestSell(req.body);
        try {
            product.save().then((product) => {
                res.status(201).json({ message: 'successfully', product });
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }
}

module.exports = new phoneControllers();
