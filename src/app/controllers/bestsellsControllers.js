const bestSells = require('../models/bestSells');

class bestControllers {
    // [POST] /best-sells/create
    create(req, res, next) {
        const bestSale = new bestSells(req.body);
        bestSale
            .save()
            .then(() => {
                res.status(201).json({
                    message: 'Create best sale successfully!!!',
                });
            })
            .catch(next);
    }

    // [GET] /best-sells
    async getAll(req, res) {
        await bestSells.find({}).then((bestSells) => {
            res.json(bestSells);
        });
    }

    // [GET] /best-sells/:id
    async getItem(req, res) {
        try {
            await bestSells.findById(req.params.id).then((item) => {
                res.status(200).json(item);
            });
        } catch (error) {
            res.status(500).json({ err: error });
        }
    }
}

module.exports = new bestControllers();
