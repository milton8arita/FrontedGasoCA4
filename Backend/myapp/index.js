const express = require('express');
const DBconnection =require('./config/database');
const cors = require('cors');

//Se crea el servidor
const app = express();

//Conectar a DB
DBconnection();
app.use(cors())

//habilitar datos JSON
app.use(express.json());

//app.use('/api/auth', authController);

//Ruta
//para que el fronted sepa donde ir a preguntar al backend y el backend le devuelve el conjunto de datos que encontro
app.use('/api/usuarios', require('./router/usuarioroute'));
app.use('/api/gasolineras', require('./router/gasolineraroute'));
app.use('/api/productos', require('./router/productosroute'));
app.use('/api/calificaciones', require('./router/calificacionroute'));
app.use('/api/eventos', require('./router/eventosroute'));
app.use('/api/incidentes', require('./router/incidentesroute'));



app.listen(5001, () => {
    console.log('The server is runnig')
})