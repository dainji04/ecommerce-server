const express = require('express');
const router = express.Router();

const userControllers = require('../app/controllers/userControllers');

router.post('/register', userControllers.create);

module.exports = router;
