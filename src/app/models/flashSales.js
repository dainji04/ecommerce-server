const mongoose = require('mongoose');
const schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const flashSales = new schema(
    {
        // itemId: { type: String, required: true },
        brand: { type: String, required: true },
        colors: { type: Array, required: true },
        description: { type: String, required: true },
        detailsImg: { type: Array, required: true },
        discount: { type: Number, default: 0 },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        slug: { type: String, slug: 'name' },
        stock: { type: Number, required: true },
        thumbnail: { type: String, required: true },
        type: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

mongoose.set('strictQuery', false);
mongoose.plugin(slug);
const ecommerce = mongoose.connection.useDb('ecommerce');

module.exports = ecommerce.model('flashSales', flashSales);
