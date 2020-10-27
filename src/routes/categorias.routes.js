const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');
const { renderCategorias } = require('../controllers/cate.controller');

router.get('/categorias', isLoggedIn, renderCategorias);

module.exports = router;