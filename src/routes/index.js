const flashSales = require('./flash');
const laptop = require('./laptop');
const headphones = require('./headphones');
const phones = require('./phone');
const site = require('./site');
const tablet = require('./tablet');
const watch = require('./watch');

function route(app) {
    app.use('/flash-sales', flashSales);

    app.use('/laptop', laptop);

    app.use('/headphones', headphones);

    app.use('/phone', phones);

    app.use('/', site);

    app.use('/tablet', tablet);

    app.use('/watch', watch);
}

module.exports = route;
