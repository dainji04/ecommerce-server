const mongoose = require('mongoose');
const schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

const laptop = new schema(
    {
        brand: { type: String, required: true },
        colors: { type: Array, required: true },
        description: { type: String, required: true },
        detailsImg: { type: Array, required: true },
        discount: { type: Number, default: 0 },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        ram: { type: Array, required: true },
        rom: { type: Array, required: true },
        slug: { type: String, slug: 'name' },
        stock: { type: Number, required: true },
        thumbnail: { type: String, required: true },
        flashSalesId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'flashSales',
        },
    },
    {
        timestamps: true,
    }
);

mongoose.set('strictQuery', false);
mongoose.plugin(slug);

const ecommerce = mongoose.connection.useDb('ecommerce');

module.exports = ecommerce.model('laptop', laptop);
