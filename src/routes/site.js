const express = require('express');
const router = express.Router();
const siteControllers = require('../app/controllers/siteControllers');

router.get('/products', siteControllers.products);
router.post('/products/flash-sales', siteControllers.flashSales);
router.get('/', siteControllers.index);

module.exports = router;
