const express = require('express')
const router = express.Router();

const eventoscontroller = require('../controllers/eventoscontroller');

router.get('/', eventoscontroller.getEventos);
router.post('/', eventoscontroller.createEvento);
router.put('/:id', eventoscontroller.updateEvento);
router.get('/:id', eventoscontroller.getEvento);
router.get('/:id', eventoscontroller.deleteEvento);

module.exports = router;

