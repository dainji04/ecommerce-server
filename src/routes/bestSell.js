const express = require('express');
const router = express.Router();

const bestSellControllers = require('../app/controllers/bestSellControllers');

router.get('/:id', bestSellControllers.getItem);
router.post('/create', bestSellControllers.create);
router.get('/', bestSellControllers.getAll);

module.exports = router;
