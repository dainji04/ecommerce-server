const flashSales = require('../models/flashSales');

class flashControllers {
    // [GET] /flash-sales
    async getAll(req, res) {
        await flashSales.find({}).then((flashSales) => {
            res.json(flashSales);
        });
    }

    // [GET] /flash-sales/:id
    async getItem(req, res) {
        try {
            await flashSales.findById(req.params.id).then((item) => {
                res.status(200).json({ success: 'successfully', item });
            });
        } catch (error) {
            res.status(500).json({ err: error });
        }
    }

    // [POST] /flash-sales/create
    create(req, res, next) {
        const flashSale = new flashSales(req.body);
        flashSale
            .save()
            .then(() => {
                res.status(201).json({
                    message: 'Create flash sale successfully!!!',
                });
            })
            .catch(next);
    }
}

module.exports = new flashControllers();
