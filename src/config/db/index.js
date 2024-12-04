const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://ndai31072004:ndnd91tqBHSUp6mD@ecommerce.8e2ni.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce'
        );
        console.log('Connect successfully!!!');
    } catch (err) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
