const express = require('express');
const router = express.Router();

const watchControllers = require('../app/controllers/watchControllers');

router.get('/:id', watchControllers.getItem);
router.post('/create', watchControllers.create);
router.get('/', watchControllers.getAll);

module.exports = router;
