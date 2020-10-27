const express = require('express')
const router = express.Router()
const{isLoggedIn} = require('../lib/auth')
const {renderGoles,addGoles,renderlist} = require('../controllers/goles.controller')

router.use(isLoggedIn)
router.get('/guardados',renderGoles)
router.post('/guardados',addGoles)
router.get('/list', isLoggedIn,renderlist)

module.exports = router

