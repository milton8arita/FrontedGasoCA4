const express = require('express');
const router = express.Router();
const usuariocontroller = require('../controllers/usuariocontroller');

router.post('/', usuariocontroller.createUsuario);
router.get('/', usuariocontroller.getUsuarios);
router.put('/:id', usuariocontroller.updateUsuario);
router.get('/:id', usuariocontroller.getUsuario)
router.delete('/:id', usuariocontroller.deleteUsuario);

module.exports = router;
