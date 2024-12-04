const flashSales = require('../models/flashSales');
const { mutipleMongooseToObject } = require('../../util/index');

class SiteControllers {
    // [GET] /
    index(req, res) {
        res.send('home');
    }
}

module.exports = new SiteControllers();
