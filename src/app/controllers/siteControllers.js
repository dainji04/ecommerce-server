const flashSales = require('../models/flashSales');
class SiteControllers {
    // [GET] /
    index(req, res) {
        res.render('home');
    }
}

module.exports = new SiteControllers();
