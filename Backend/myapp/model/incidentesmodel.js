const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const incidentesSchema = new Schema({
    tipoIncidentes: {type: String, require: true},
    descripcion: {type: String, require: true},
    fecha: {type: Date, require: true},
    accionTomada: {type: String, require: true},
    gasolinera: {type: Schema.Types.ObjectId, ref: 'gasolineras'}
},{versionKey: false});


module.exports = mongoose.model('incidentes', incidentesSchema);