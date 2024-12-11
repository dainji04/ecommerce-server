const express = require('express');
const router = express.Router();

const laptopControllers = require('../app/controllers/laptopControllers');

router.get('/:id', laptopControllers.getItem);
router.post('/create', laptopControllers.create);
router.get('/', laptopControllers.getAll);

module.exports = router;
