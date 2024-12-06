const express = require('express');
const router = express.Router();

const phoneControllers = require('../app/controllers/phoneControllers');

router.get('/:id', phoneControllers.getItem);
router.post('/create', phoneControllers.create);
router.get('/', phoneControllers.getAll);

module.exports = router;
