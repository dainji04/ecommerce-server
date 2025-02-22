const express = require('express');
const router = express.Router();

const userControllers = require('../app/controllers/userControllers');

router.get('/auth/:email/info', userControllers.getInfo);
router.post('/register', userControllers.create);
router.put('/auth/:email/update', userControllers.update);

module.exports = router;
