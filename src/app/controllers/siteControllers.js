const flashSales = require('../models/flashSales');
class SiteControllers {
    // [GET] /
    index(req, res) {
        res.send('home');
    }
}

module.exports = new SiteControllers();
