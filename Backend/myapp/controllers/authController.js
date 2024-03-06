const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Usuario = require('./models/Usuario'); // Importa tu modelo de usuario

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
  // Extrae el correo electrónico y la contraseña del cuerpo de la solicitud
  const { email, password } = req.body;

  try {
    // Busca el usuario en la base de datos por su correo electrónico
    const usuario = await Usuario.findOne({ email });

    // Si el usuario no existe, devuelve un error
    if (!usuario) {
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }

    // Verifica si la contraseña es correcta
    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) {
      return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }

    // Si la contraseña es correcta, genera un token JWT
    const token = jwt.sign(
      { usuarioId: usuario._id, email: usuario.email },
      'SECRETO_DEL_TOKEN', // Reemplaza 'SECRETO_DEL_TOKEN' con tu propia clave secreta
      { expiresIn: '1h' } // Opcional: tiempo de expiración del token
    );

    // Devuelve el token como respuesta
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

module.exports = router;
