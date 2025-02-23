const express = require('express');
const router = express.Router();

const userControllers = require('../app/controllers/userControllers');

router.get('/auth/:email/info', userControllers.getInfo);
router.post('/register', userControllers.create);
router.put('/auth/:email/update', userControllers.update);
router.get('/auth/:email/wishlist', userControllers.getWishList);
router.post('/auth/:email/wishlist', userControllers.addToWishList);
router.get('/auth/:email/cart', userControllers.getCart);
router.post('/auth/:email/cart', userControllers.addToCart);

module.exports = router;
