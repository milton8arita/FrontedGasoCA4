const express = require('express');
const router = express.Router();

const productoscontroller = require('../controllers/productoscontroller');

router.get('/', productoscontroller.getProductos);
router.post('/', productoscontroller.createProducto);
router.put('/:id', productoscontroller.updateUsuario)
router.get('/:id', productoscontroller.getProducto);

router.delete('/:id', productoscontroller.deleteProducto);

module.exports = router;


