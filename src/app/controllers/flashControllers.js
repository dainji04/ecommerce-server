const flashSales = require('../models/flashSales');

// const addIphoneToFlashSales = async (body) => {
//     console.log(id, discount);
//     try {
//         const flashSale = new FlashSale({
//             itemId: body.itemId,
//             name: body.name,
//             thumbnail: body.thumbnail,
//             description: body.description,
//             price: body.price,
//             discount: discount,
//             stock: body.stock,
//             detailsImg: body.detailsImg,
//             startDate: new Date(),
//             endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
//         });
//         await flashSale.save();
//         findbyid(body.itemId).then((item) => {item.discount = body.discount})
//     } catch (error) {
//         console.log(error);
//     }
// };
class flashControllers {
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
                res.status(200).json(item);
            });
        } catch (error) {
            res.status(500).json({ err: error });
        }
    }
}

module.exports = new flashControllers();
