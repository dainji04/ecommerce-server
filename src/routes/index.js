const site = require('./site');
const flashSales = require('./flash');
const bestSell = require('./bestSell');

function route(app) {
    app.use('/best-sell', bestSell);

    app.use('/flash-sales', flashSales);

    app.use('/', site);
}

module.exports = route;
