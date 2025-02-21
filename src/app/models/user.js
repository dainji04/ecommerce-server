const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    address: { type: String },
    cart: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId },
            quantity: { type: Number, required: true },
            productType: { type: String, required: true },
        },
    ],
    wishlist: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId },
            productType: { type: String, required: true },
        },
    ],
});

mongoose.set('strictQuery', false);

const ecommerce = mongoose.connection.useDb('ecommerce');

module.exports = ecommerce.model('user', user);
