const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');
const { renderNi } = require('../controllers/ninos.controller');

router.get('/ninos', isLoggedIn, renderNi);

module.exports = router;