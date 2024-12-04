const bestSell = require('../models/bestSell');

class bestSellControllers {
    // [GET] /best-sell
    async getAll(req, res) {
        try {
            await bestSell.find({}).then((bestSell) => {
                res.json(bestSell);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed' });
        }
    }

    // [GET] /best-sell/:id
    async getItem(req, res) {
        try {
            await bestSell.findById(req.params.id).then((item) => {
                res.status(200).json(item);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }

    // [POST] /best-sell/create
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

module.exports = new bestSellControllers();
