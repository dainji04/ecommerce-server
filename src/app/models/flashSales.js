const mongoose = require('mongoose');
const schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const flashSales = new schema(
    {
        name: { type: String, required: true },
        thumbnail: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        discount: { type: Number, required: true },
        stock: { type: Number, required: true },
        details_img: { type: Array, required: true },
        slug: { type: String, slug: 'name' },
    },
    {
        timestamps: true,
    }
);

mongoose.set('strictQuery', false);
mongoose.plugin(slug);

module.exports = mongoose.model('flashSales', flashSales);
