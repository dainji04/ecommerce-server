const flashSales = require('../models/flashSales');
const { mutipleMongooseToObject } = require('../../util/index');

class SiteControllers {
    // [GET] /
    index(req, res) {
        res.send('home');
    }

    // [GET] /products
    async products(req, res) {
        await flashSales.find({}).then((flashSales) => {
            res.json(flashSales);
        });
    }

    // [POST] /products/flash-sales
    flashSales(req, res, next) {
        console.log(req.body);
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

module.exports = new SiteControllers();
