const express = require('express');
const router = express.Router();

const tabletControllers = require('../app/controllers/tabletControllers');

router.get('/:id', tabletControllers.getItem);
router.post('/create', tabletControllers.create);
router.get('/', tabletControllers.getAll);

module.exports = router;
