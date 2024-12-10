const site = require('./site');
const flashSales = require('./flash');
const phones = require('./phones');

function route(app) {
    app.use('/phones', phones);

    app.use('/flash-sales', flashSales);

    app.use('/', site);
}

module.exports = route;
