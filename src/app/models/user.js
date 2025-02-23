const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
    name: { type: String, required: true },
    email: { type: String },
    emailLogin: { type: String, required: true, unique: true },
    phoneNumber: { type: String, default: '' },
    address: { type: String, default: '' },
    cart: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId },
            productName: { type: String, required: true },
            productImage: { type: String, required: true },
            productPrice: { type: Number, required: true },
            productType: { type: String, required: true },
            quantity: { type: Number, default: 1 },
        },
    ],
    wishlist: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId },
            productName: { type: String, required: true },
            productImage: { type: String, required: true },
            productPrice: { type: Number, required: true },
            productType: { type: String, required: true },
        },
    ],
});

mongoose.set('strictQuery', false);

const ecommerce = mongoose.connection.useDb('ecommerce');

module.exports = ecommerce.model('user', user);
