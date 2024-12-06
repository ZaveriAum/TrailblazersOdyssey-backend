const express = require('express');
const router = express.Router();
const controller = require('../controllers/pointController')

router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get('/points/:id', controller.getPoint)

router.get('/points', controller.getPoints)

router.post('/points', controller.createPoint)

router.put('/points/:id', controller.updatePoint)

module.exports = router;