const express = require('express');
const router = express.Router();

const allProductsController = require('../app/controllers/allproductsControllers');

router.get('/', allProductsController.index);

module.exports = router;
