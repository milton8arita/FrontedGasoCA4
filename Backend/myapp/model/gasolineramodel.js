const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gasolineraSchema = new Schema({
    nombre: {type: String, require: true},
    productos: {type: String, require: true},
    ubicacion:{
        latitud: {type: Number},
        longitud: {type: Number}
        ,},
    productos: [{ type: Schema.Types.ObjectId, ref: 'productos' }] ,
    calificacion: [{ type: Schema.Types.ObjectId, ref: 'calificaciones' }] 

});

module.exports = mongoose.model('gasolineras', gasolineraSchema);;
