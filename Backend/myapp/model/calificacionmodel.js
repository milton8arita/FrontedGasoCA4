const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const calificacionSchema = new Schema({
    puntuacion: { type: Number, require: true },
    comentario: { type: String , require: true},
    fechaCalificacion: { type: Date , require: true},
    usuario: { type: Schema.Types.ObjectId, ref: 'usuarios' },
    gasolinera: { type: Schema.Types.ObjectId, ref: 'gasolineras' }
});


module.exports = mongoose.model('calificaciones', calificacionSchema);
