const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productosSchema = new Schema({
    nombre: {type: String, require: true},
    descripcion: {type: String, require: true},
    precio: {type: Number, require: true},
    gasolinera: {type: Schema.Types.ObjectId, ref: 'gasolineras'}
});

module.exports = mongoose.model('productos', productosSchema);;


