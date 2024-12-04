const express = require('express');
const router = express.Router();

const flashControllers = require('../app/controllers/flashControllers');

router.get('/:id', flashControllers.getItem);
router.post('/create', flashControllers.create);
router.get('/', flashControllers.getAll);

module.exports = router;
