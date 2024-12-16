const phones = require('../models/phones');
const laptop = require('../models/laptop');
const watch = require('../models/watch');
const headphone = require('../models/headPhones');
const tablet = require('../models/tablet');

class allProducts {
    // [GET] /allproducts
    async index(req, res) {
        try {
            const allProducts = await Promise.all([
                phones.find({}),
                laptop.find({}),
                headphone.find({}),
                watch.find({}),
                tablet.find({}),
            ]);

            const mergedProducts = [].concat(...allProducts);
            res.json(mergedProducts);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}

module.exports = new allProducts();
