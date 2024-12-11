const express = require('express');
const router = express.Router();

const headPhonesControllers = require('../app/controllers/headPhonesControllers');

router.get('/:id', headPhonesControllers.getItem);
router.post('/create', headPhonesControllers.create);
router.get('/', headPhonesControllers.getAll);

module.exports = router;
