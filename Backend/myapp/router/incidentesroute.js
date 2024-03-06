const express = require('express')

const router = express.Router();

const incidentescontroller = require('../controllers/incidentescontroller');
const { route } = require('./usuarioroute');

router.get('/', incidentescontroller.getIncidentes);
router.post('/', incidentescontroller.createIncidente);
router.put('/:id', incidentescontroller.updateIncidente);
router.get('/:id', incidentescontroller.getIncidente);
router.delete('/:id', incidentescontroller.deleteIncidente);

module.exports = router;


