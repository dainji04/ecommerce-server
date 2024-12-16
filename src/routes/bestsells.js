const express = require('express');
const router = express.Router();

const bestsellsControllers = require('../app/controllers/bestsellsControllers');

router.get('/:id', bestsellsControllers.getItem);
router.post('/create', bestsellsControllers.create);
router.get('/', bestsellsControllers.getAll);

module.exports = router;
