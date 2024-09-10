const express = require('express');
const { addEquipment } = require('../controllers/equipmentController');

const router = express.Router();

router.post('/add', addEquipment);

module.exports = router;
