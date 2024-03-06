const express = require('express');
const router = express.Router();

const gasolineracontroller = require('../controllers/gasolineracontroller');

router.get('/', gasolineracontroller.getGasolineras);

router.post('/', gasolineracontroller.createGasolineras);
router.put('/:id', gasolineracontroller.updateGasolinera);
router.get('/:id', gasolineracontroller.getGasolinera)
router.delete('/:id', gasolineracontroller.deleteGasolinera);

module.exports = router;

