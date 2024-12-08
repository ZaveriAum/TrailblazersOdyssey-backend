const express = require('express');
const router = express.Router();
const controller = require('../controllers/teamController')

router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get('/team/:id', controller.getMember)

router.get('/team', controller.getTeam)

router.post('/team', controller.createMember)

router.put('/team/:id', controller.updateMember)

module.exports = router;