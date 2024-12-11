const watch = require('../models/watch');
// CRUD: create[POST] - read[GET] - update[PUT/PATCH] - delete[DELETE]
class watchControllers {
    // [POST] /watch/create
    create(req, res) {
        const product = new watch(req.body);
        try {
            product.save().then((product) => {
                res.status(201).json({ message: 'successfully', product });
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }

    // [GET] /watch
    async getAll(req, res) {
        try {
            await watch.find({}).then((watch) => {
                res.json(watch);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed' });
        }
    }

    // [GET] /watch/:id
    async getItem(req, res) {
        try {
            await watch.findById(req.params.id).then((phone) => {
                res.status(200).json(phone);
            });
        } catch (err) {
            res.status(500).json({ message: 'failed', err });
        }
    }
}

module.exports = new watchControllers();
