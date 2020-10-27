const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');
const { renderAdul } = require('../controllers/adul.controller');

router.get('/adultos', isLoggedIn, renderAdul);

module.exports = router;